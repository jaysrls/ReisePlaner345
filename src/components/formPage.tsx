import { FormData } from '../types';
import './formPage.css'
import React, { useEffect, useState } from 'react';

type formProps = {
    onSave: (formData: FormData) => void
}

export default function FormPage(props: formProps) {
    const [formData, setFormData] = useState<FormData>({
        Geschlecht: '',
        Ferientage: 0,
        'Hygiene Level': 4,
        Transportmittel: '',
        Unterkunftsart: '',
        'Eigene spezifische Artikel': '',
        Jahreszeit: '',
        Reiseart: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSave(formData);
        setFormData({
            Geschlecht: '',
            Ferientage: 0,
            'Hygiene Level': 4,
            Transportmittel: '',
            Unterkunftsart: '',
            'Eigene spezifische Artikel': '',
            Jahreszeit: '',
            Reiseart: '', 
        });
    };
    useEffect(() => {
    }, [formData])
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="Geschlecht">
                Geschlecht:
            </label>
            <select id="Geschlecht" name="Geschlecht" value={formData.Geschlecht} onChange={handleInputChange}>
                <option value="">Bitte auswählen</option>
                <option value="Männlich">Männlich</option>
                <option value="Weiblich">Weiblich</option>
            </select>

            <label htmlFor="Ferientage">
                Anzahl Ferientage:
            </label>
            <input id="Ferientage" name="Ferientage" type="number" value={formData.Ferientage} onChange={handleInputChange} />

            <label htmlFor="HygieneLevel">
                Hygiene Level für deine Reise: {formData['Hygiene Level']}
            </label>
            <input id="HygieneLevel" name="Hygiene Level" type="range" min="1" max="5" value={formData['Hygiene Level']} onChange={handleInputChange} />

            <label htmlFor="Transportmittel">
                Transportmittel:
            </label>
            <select id="Transportmittel" name="Transportmittel" value={formData.Transportmittel} onChange={handleInputChange}>
                <option value="">Bitte auswählen</option>
                <option value="Auto">Auto</option>
                <option value="Zug">Zug</option>
                <option value="Flugzeug">Flugzeug</option>
            </select>

            <label htmlFor="Unterkunftsart">
                Unterkunftsart:
            </label>
            <select id="Unterkunftsart" name="Unterkunftsart" value={formData.Unterkunftsart} onChange={handleInputChange}>
                <option value="">Bitte auswählen</option>
                <option value="Ferienwohnung">Ferienwohnung</option>
                <option value="Hotel">Hotel</option>
                <option value="Zelt/Camper">Zelt/Camper</option>
            </select>
            <label htmlFor="Jahreszeit">
                Klima
            </label>
            <select id="Jahreszeit" name="Jahreszeit" value={formData.Jahreszeit} onChange={handleInputChange}>
                <option value="">Bitte auswählen</option>
                <option value="Frühling">10-20 c°</option>
                <option value="Sommer">20-40 c°</option>
                <option value="Herbst">5-15 c°</option>
                <option value="Winter">-10-10 c°</option>
            </select>
            <label htmlFor="Reiseart">
                Reiseart:
            </label>
            <select id="Reiseart" name="Reiseart" value={formData.Reiseart} onChange={handleInputChange}>
                <option value="">Bitte auswählen</option>
                <option value="Wanderferien">Wanderferien</option>
                <option value="Strand/Poolferien">Strand/Poolferien</option>
                <option value="Wintersportferien">Wintersportferien</option>
                <option value="Stadtferien">Stadtferien</option>
            </select>
            
            <button type="submit">Speichern</button>
        </form>

    );
}
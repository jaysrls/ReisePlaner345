import { FormData } from '../types';
import './formPage.css'
import React, { useState } from 'react';

type formProps = {
    onSave: (formData: FormData) => void
}

export default function FormPage(props: formProps) {
    const [formData, setFormData] = useState({
        Geschlecht: '',
        'Anzahl Ferientage': '',
        'Hygiene Level': 5,
        Transportmittel: '',
        Unterkunftsart: '',
        'Eigene spezifische Artikel': ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSave(formData);
        setFormData({
            Geschlecht: '',
            'Anzahl Ferientage': '',
            'Hygiene Level': 5,
            Transportmittel: '',
            Unterkunftsart: '',
            'Eigene spezifische Artikel': ''
        });
    };
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

            <label htmlFor="AnzahlFerientage">
                Anzahl Ferientage:
            </label>
            <input id="AnzahlFerientage" name="Anzahl Ferientage" type="number" value={formData['Anzahl Ferientage']} onChange={handleInputChange} />

            <label htmlFor="HygieneLevel">
                Hygiene Level: {formData['Hygiene Level']}
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

            <label htmlFor="EigeneSpezifischeArtikel">
                Eigene spezifische Artikel:
            </label>
            <textarea id="EigeneSpezifischeArtikel" name="Eigene spezifische Artikel" value={formData['Eigene spezifische Artikel']} onChange={handleInputChange} />

            <button type="submit">Speichern</button>
        </form>

    );
}
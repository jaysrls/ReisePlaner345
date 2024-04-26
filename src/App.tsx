import { useEffect, useState } from 'react'
import './App.css'
import FormPage from './components/formPage'
import { FormData, packList } from './types'
import TodoList from './components/todoList';

function App() {
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
  const [packlist, setPacklist] = useState<packList>({
    'Underwear': 0,
    'Socks': 0,
    'T-Shirts': 0,
    'Sweatshirts': 0,
    'Pants': 0,
    'Shorts': 0,
    'Bug Spray': 0,
    'Hats': 0,
    'Caps': 0,
    'Shoes Light': 0,
    'Shoes Heavy': 0,
    'Gas Cooker': 0,
    'Food Help': 0,
    'Sleeping Bag': 0,
    'Toothbrush': 0,
    'Toothpaste': 0,
    'Soap': 0,
    'Deodorant': 0,
    'Shaver': 0,
    'Shaving Creme': 0,
    'Towel': 0,
    'Shampoo': 0,
    'Hand Creme': 0,
    'Lip Balm': 0,
    'Perfume': 0,
    'Nail Clippers': 0,
    'Cotton Swabs': 0,
    'Cleanser': 0,
    'Moisturizer': 0,
    'Face Cream': 0,
    'Hiking Shoes': 0,
    'Bathing Pants': 0,
    'Skis': 0,
    'Ski Boots': 0,
    'Ski Jacket': 0,
    'Bras': 0,
    'Book Bags': 0,
    'Suitcases': 0,
    'Small Bags': 0
  });
  const formHandler = (formdata: FormData) => {
    setFormData(formdata)
  }
  useEffect(() => {
    calcList(formData)
    console.log(formData)
  }, [formData])

  function calcList(formData: FormData) {
    const hgl = formData['Hygiene Level'];
    const days = formData.Ferientage;
    const season = formData.Jahreszeit;
    const gender = formData.Geschlecht;
    const accommodation = formData.Unterkunftsart;
    const transportation = formData.Transportmittel;
    const vacationType = formData.Reiseart;

    setPacklist({
      'Underwear': days,
      'Socks': days,
      'T-Shirts': Math.ceil((hgl / 5) * days),
      'Sweatshirts': Math.ceil((hgl / 5) * days / 2),
      'Pants': Math.ceil(Math.ceil((hgl / 5) * days) / 3),
      'Shorts': season === 'Sommer' ? Math.ceil(Math.ceil((hgl / 5) * days) / 2) : 0,
      'Bug Spray': season === 'Sommer' ? 1 : 0,
      'Hats': season === 'Winter' ? 1 : 0,
      'Caps': season === 'Sommer' ? 1 : 0,
      'Shoes Light': season === 'Sommer' ? 2 : season === 'Winter' ? 2 : 1,
      'Shoes Heavy': season === 'Sommer' ? 0 : season === 'Winter' ? 0 : 1,
      'Gas Cooker': accommodation === 'Zelt/Camper' ? 1 : 0,
      'Food Help': accommodation === 'Zelt/Camper' ? 1 : 0,
      'Sleeping Bag': accommodation === 'Zelt/Camper' ? 1 : 0,
      'Toothbrush': hgl >= 1 ? 1 : 0,
      'Toothpaste': hgl >= 1 ? 1 : 0,
      'Soap': hgl >= 2 ? 1 : 0,
      'Deodorant': hgl >= 3 ? 1 : 0,
      'Shaver': hgl >= 3 ? 1 : 0,
      'Shaving Creme': hgl >= 3 ? 1 : 0,
      'Towel': hgl >= 2 ? 1 : 0,
      'Shampoo': hgl >= 3 ? 1 : 0,
      'Hand Creme': hgl >= 4 ? 1 : 0,
      'Lip Balm': hgl >= 4 ? 1 : 0,
      'Perfume': hgl >= 4 ? 1 : 0,
      'Nail Clippers': hgl >= 4 ? 1 : 0,
      'Cotton Swabs': hgl >= 4 ? 1 : 0,
      'Cleanser': hgl >= 5 ? 1 : 0,
      'Moisturizer': hgl >= 5 ? 1 : 0,
      'Face Cream': hgl >= 5 ? 1 : 0,
      'Hiking Shoes': vacationType === 'Wanderferien' ? 1 : 0,
      'Bathing Pants': vacationType === 'Bade/Poolferien' ? 1 : 0,
      'Skis': vacationType === 'Wintersportferien' ? 1 : 0,
      'Ski Boots': vacationType === 'Wintersportferien' ? 1 : 0,
      'Ski Jacket': vacationType === 'Wintersportferien' ? 1 : 0,
      'Bras': gender === 'Weiblich' ? Math.ceil(days / 7) : 0,
      'Book Bags': transportation === 'Zug' ? 1 : transportation === 'Flugzeug' ? 1 : 0,
      'Suitcases': transportation === 'Zug' ? 1 : transportation === 'Flugzeug' ? 1 : 0,
      'Small Bags': transportation === 'Flugzeug' ? 1 : 0,
    })
  }

  return (
    <div className="container">
      <div className="leftSide"><FormPage onSave={formHandler}></FormPage></div>
      <div className="rightSide"><TodoList packList={packlist}></TodoList></div>
    </div>
  )
}

export default App

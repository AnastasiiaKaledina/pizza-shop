import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PopupPizza = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [pizzaInfo, setPizzaInfo] = React.useState();

  React.useEffect(() => {
    async function getPizzaInfo() {
      try {
        const { data } = await axios.get(
          `https://63acc6b1da81ba97618c3d0a.mockapi.io/items/${params.id}`,
        );
        setPizzaInfo(data);
      } catch (error) {
        alert('Ошибка при получении пиццы');
        navigate('/');
      }
    }

    getPizzaInfo();
  }, []);

  if (!pizzaInfo) return <>Загрузка...</>;

  return (
    <div>
      <img src={pizzaInfo.imageUrl} alt="Pizza img" />
      <h1>{pizzaInfo.title}</h1>
      <p>{pizzaInfo.price} ₽</p>
    </div>
  );
};

export default PopupPizza;

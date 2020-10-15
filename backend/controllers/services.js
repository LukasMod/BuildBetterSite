const { v4: uuid } = require('uuid');

const servicesData = [
  {
    description: 'Wall on a 75mm profile, double-sided normal plasterboard 2 x 12.5 mm',
    id: uuid(),
    img: '',
    price: 200,
    producers: ['Siniat, Norgips, Saint-Gobain'],
    title: 'Plasterboard system wall 125mm - normal',
  },
  {
    description: 'Wall on a 75mm profile, double-sided water resistant plasterboard 2 x 12.5 mm',
    id: uuid(),
    img: '',
    price: 230,
    producers: ['Siniat, Norgips, Saint-Gobain'],
    title: 'Plasterboard system wall 125mm - water resistant',
  },
  {
    description: 'Wall on a 75mm profile, double-sided silent plasterboard 2 x 12.5 mm',
    id: uuid(),
    img: '',
    price: 240,
    producers: ['Siniat, Norgips, Saint-Gobain'],
    title: 'Plasterboard system wall 125mm - silent',
  },
  {
    description: 'Wall on a 75mm profile, double-sided fire resistant plasterboard 2 x 12.5 mm',
    id: uuid(),
    img: '',
    price: 250,
    producers: ['Siniat, Norgips, Saint-Gobain'],
    title: 'Plasterboard system wall 125mm - fire resistant',
  }

];

exports.getServices = (request, response, next) => {
  try {
    response.status(200).json({
      services: servicesData
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /services',
    });
  }
};

exports.getService = (request, response, next) => {
  try {
    const { id } = request.params;
    const serviceToSend = servicesData.find(service => service.id === id);

    if (!serviceToSend) {
      response.status(404).json({
        message: 'Nie znaleziono usługi o podanym id',
      });

      return;
    }

    response.status(200).json({
      services: serviceToSend,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /services/:id',
    })
  }
};

exports.postService = (request, response, next) => {
  try {
    const { description, img, price, producers, title } = request.body;
    if (!description || !price || !producers || !title) {
      response.status(400).json({
        message: 'Nie podano wszystkich wymaganych informacji (opis, producent, cena, tytuł)',
      });

      return;
    }

    const isServiceExist = servicesData.some(({ title: currentTitle }) => currentTitle === title);
    if (isServiceExist) {
      response.status(409).json({
        message: `Istnieje już w bazie usługa: ${title}`,
      });

      return;
    }

    const newService = {
      description,
      id: uuid(),
      img,
      price,
      producers,
      title,
    };

    servicesData.push(newService);

    response.status(201).json({
      services: servicesData
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie POST w endpointcie /services'
    });
  }
};

exports.putService = (request, response, next) => {
  try {
    const { description, id, price, producers, title } = request.body;
    if (!description || !id || !price || !producers || !title) {
      response.status(400).json({
        message: 'Nie podano wszystkich wymaganych informacji (opis, id, cena, producent, tytuł)',
      });

      return;
    }

    const indexServiceToUpdate = servicesData.findIndex(service => service.id === id);
    if (indexServiceToUpdate === -1) {
      response.status(404).json({
        message: 'Nie znaleziono kursu o podanym id',
      });

      return;
    }


    servicesData.splice(indexServiceToUpdate, 1, request.body);

    response.status(202).json({
      services: servicesData
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie PUT w endpointcie /services'
    });
  }
};

exports.deleteService = (request, response, next) => {
  try {
    const { id } = request.params;

    console.log(id);
    const indexServiceToDelete = servicesData.findIndex(service => service.id === id);

    if (indexServiceToDelete === -1) {
      response.status(404).json({
        message: 'Nie znaleziono kursu o podanym id',
      });

      return;
    }

    servicesData.splice(indexServiceToDelete, 1);
    response.status(200).end();
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie DELETE w endpointcie /services/:id',
    });
  }
};

exports.servicesData = servicesData;
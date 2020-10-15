const { servicesData } = require('./services');

const usersData = [
  {
    accessLevel: 0,
    budget: 600,
    services: [
      servicesData[0].id,
      servicesData[1].id,
      servicesData[2].id,
    ],
    login: 'u',
    password: 'u',
  },
  {
    accessLevel: 1,
    budget: 1000000,
    services: [
      servicesData.map(service => service.id)
    ],
    login: 'a',
    password: 'a',
  }
];

exports.postUser = (request, response, next) => {
  try {
    const { login, password } = request.body;

    const user = usersData.find(u => u.login === login);
    if (!user) {
      response.status(404).json({
        message: 'Użytkownik o podanym loginie nie istnieje',
      });

      return;
    }

    const isPasswordCorrect = user.password === password;
    if (!isPasswordCorrect) {
      response.status(401).json({
        message: 'Hasło lub login się nie zgadza',
      });

      return;
    }

    response.status(200).json({
      user,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie POST w endpointcie /users',
    });
  }
};

exports.patchUser = (request, response, next) => {
  try {
    const { login, serviceId } = request.body;

    const service = servicesData.find(service => service.id === serviceId);
    const user = usersData.find(user => user.login === login);

    if (!service) {
      response.status(404).json({
        message: 'Nie znaleziono kursu o podanym Id',
      });

      return;
    } else if (!user) {
      response.status(404).json({
        message: 'Nie znaleziono uzytkownika o podanym loginie',
      });

      return;
    }

    const hasUserServiceAlready = user.services.some(id => id === serviceId);
    if (hasUserServiceAlready) {
      response.status(200).json({
        user,
      });

      return;
    }

    const hasUserEnoughtMoney = user.budget - service.price >= 0;
    if (!hasUserEnoughtMoney) {
      response.status(403).json({
        message: 'Uzytkownik nie posiada wystarczających funduszy',
      });

      return;
    }

    user.budget = Number((user.budget - service.price).toFixed(2));
    user.services.push(serviceId);
    response.status(202).json({
      user,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie PATCH w endpointcie /users',
    });
  }
};
document.addEventListener('DOMContentLoaded', function () {
    const buttonServicios = document.querySelector('.buttonServicios');
    const buttonClientes = document.querySelector('.buttonClientes');
    const buttonAcerca = document.querySelector('.buttonAcerca');
    const servicios = document.querySelector('.servicios');
    const clientes = document.querySelector('.clientes');
    const acercaDeMi = document.querySelector('.acercaDeMi');
  
    servicios.classList.add('open');
    clientes.classList.add('Noopen');
    acercaDeMi.classList.add('Noopen');

    buttonServicios.addEventListener('click', function() {
      servicios.classList.remove('Noopen');
      clientes.classList.add('Noopen');
      acercaDeMi.classList.add('Noopen');
    });
    
    buttonClientes.addEventListener('click', function() {
        clientes.classList.remove('Noopen');
        servicios.classList.add('Noopen');
        acercaDeMi.classList.add('Noopen');
      });

    buttonAcerca.addEventListener('click', function() {
        acercaDeMi.classList.remove('Noopen');
        clientes.classList.add('Noopen');
        servicios.classList.add('Noopen');
      });

  
  });

  
// Lógica de despliegues de contenidos
const menuItems = document.querySelectorAll(".menu-item");
const contentSections = document.querySelectorAll(".content-section");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Quitar la clase 'active' de todos los menús
    menuItems.forEach((menu) => menu.classList.remove("active"));
    // Agregar la clase 'active' al ítem clicado
    item.classList.add("active");

    // Ocultar todas las secciones de contenido
    contentSections.forEach((section) => section.classList.remove("active"));
    // Mostrar la sección de contenido correspondiente al ítem clicado
    contentSections[index].classList.add("active");

    // Inicializar el gráfico solo si la sección activa es "Batch metrics"
    if (contentSections[index].id === "batch-metrics") {
      initBatchMetricsChart(); // Llamar a la función para inicializar el gráfico
    }
  });
});
// Fin de lógica de despliegues de contenidos

// Lógica de botón de perfil
const menuButton = document.querySelector(".profile-menu-btn");
const profileMenu = document.querySelector(".profile-menu");

menuButton.addEventListener("click", () => {
  profileMenu.style.display = profileMenu.style.display === "block" ? "none" : "block";
});

// Ocultar el menú si se hace clic fuera de él
document.addEventListener("click", (event) => {
  if (!menuButton.contains(event.target) && !profileMenu.contains(event.target)) {
    profileMenu.style.display = "none";
  }
});
// Fin de lógica de botón de perfil

// Lógica de ECharts para "Batch metrics"
function initBatchMetricsChart() {
  // Seleccionar el contenedor del gráfico
  const chartContainer = document.getElementById('batch-chart');

  // Verificar si el contenedor existe
  if (!chartContainer) {
    console.error('El contenedor del gráfico no fue encontrado.');
    return;
  }

  // Inicializar el gráfico
  const batchChart = echarts.init(chartContainer);

  // Configurar las opciones del gráfico
  const options = {
    title: {
      text: 'Batch Metrics Overview', // Título del gráfico
      left: 'center', // Centrar el título
    },
    tooltip: {
      trigger: 'axis', // Mostrar tooltips al pasar el mouse sobre los datos
    },
    xAxis: {
      type: 'category', // Eje X categórico
      data: ['Batch 1', 'Batch 2', 'Batch 3', 'Batch 4', 'Batch 5'], // Etiquetas del eje X
    },
    yAxis: {
      type: 'value', // Eje Y numérico
    },
    series: [
      {
        name: 'Quality Score', // Nombre de la serie
        type: 'bar', // Tipo de gráfico (barras)
        data: [85, 90, 78, 93, 88], // Datos del gráfico
      },
    ],
  };

  window.addEventListener('resize', function() {
    batchChart.resize();
  });
  // Aplicar las opciones al gráfico
  batchChart.setOption(options);
}

function handleResponsive() {
  const sidebar = document.querySelector('.sidebar');
  const menuItems = document.querySelectorAll('.menu-item');
  
  if (window.innerWidth <= 1200) {
      menuItems.forEach(item => {
          const originalText = item.querySelector('span').textContent;
          item.setAttribute('data-tooltip', originalText);
      });
  } else {
      menuItems.forEach(item => {
          item.removeAttribute('data-tooltip');
      });
  }
}

// Ejecutar al cargar y al cambiar tamaño
window.addEventListener('resize', handleResponsive);
window.addEventListener('load', handleResponsive);

// Agregar estilos para tooltips
// Texto que aparece al costado del menú contraído
const style = document.createElement('style');
style.textContent = `
  .menu-item[data-tooltip]:hover::after {
      content: attr(data-tooltip);
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      background: #1b396a;
      color: white;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 14px;
      white-space: nowrap;
      margin-left: 10px;
      pointer-events: none;
      z-index: 1000;
  }
`;
document.head.appendChild(style);

//---------- Lotes procesados por mes ----------
function initDashboardAreaChart() {
  // Seleccionar el contenedor del gráfico
  const chartContainer = document.getElementById('area-chart');

  // Verificar si el contenedor existe
  if (!chartContainer) {
    console.error('El contenedor del gráfico de área no fue encontrado.');
    return;
  }

  // Inicializar el gráfico
  const areaChart = echarts.init(chartContainer);

  // Configurar las opciones del gráfico
  const options = {
    title: {
      text: 'Lotes procesados por mes',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Lotes procesados',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [140, 232, 201, 264, 290, 330, 310, 220, 182, 191, 234, 290]
      }
    ]
  };

  // Hacer que el gráfico sea responsivo
  window.addEventListener('resize', function() {
    areaChart.resize();
  });

  // Aplicar las opciones al gráfico
  areaChart.setOption(options);
}

document.addEventListener('DOMContentLoaded', function() {
  // Since dashboard is the default active section, initialize its chart
  initDashboardAreaChart();
});

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Quitar la clase 'active' de todos los menús
    menuItems.forEach((menu) => menu.classList.remove("active"));
    // Agregar la clase 'active' al ítem clicado
    item.classList.add("active");

    // Ocultar todas las secciones de contenido
    contentSections.forEach((section) => section.classList.remove("active"));
    // Mostrar la sección de contenido correspondiente al ítem clicado
    contentSections[index].classList.add("active");

    // Inicializar el gráfico según la sección activa
    if (contentSections[index].id === "batch-metrics") {
      initBatchMetricsChart(); // Llamar a la función para inicializar el gráfico
    } else if (contentSections[index].id === "dashboard") {
      initDashboardAreaChart(); // Inicializar el gráfico de área en el dashboard
    }
  });
});
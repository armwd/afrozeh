// const body = document.querySelector('body');
function productGridChanger () {
  if (body.classList.contains('collection')){
    const firstColumn = document.querySelector('.grid-view-first-column');
    const secondColumn = document.querySelector('.grid-view-second-column');
    const thirdColumn = document.querySelector('.grid-view-third-column');
    const firstColumnMobile = document.querySelector('.grid-view-first-column-mobile');
    const secondColumnMobile = document.querySelector('.grid-view-second-column-mobile');
    
    const gridView = document.querySelector('#ProductGridContainer #product-grid');
    
    firstColumn.addEventListener('click', function() {
        gridView.classList.remove('grid--3-col-desktop', 'grid--4-col-desktop');
        gridView.classList.add('grid--2-col-desktop');
        removeActiveClass();
        firstColumn.classList.add('active');
    });
    
    secondColumn.addEventListener('click', function() {
        gridView.classList.remove('grid--2-col-desktop', 'grid--4-col-desktop');
        gridView.classList.add('grid--3-col-desktop');
        removeActiveClass();
        secondColumn.classList.add('active');
    });
    
    thirdColumn.addEventListener('click', function() {
        gridView.classList.remove('grid--2-col-desktop', 'grid--3-col-desktop');
        gridView.classList.add('grid--4-col-desktop');
        removeActiveClass();
        thirdColumn.classList.add('active');
    });

     firstColumnMobile.addEventListener('click', function() {
       console.log("you are clicking on first div")
        gridView.classList.remove('grid--2-col-tablet-down');
        gridView.classList.add('grid--1-col-tablet-down');
        firstColumnMobile.classList.add('Active');
        secondColumnMobile.classList.remove('Active');
    });

     secondColumnMobile.addEventListener('click', function() {
        gridView.classList.remove('grid--1-col-tablet-down');
        gridView.classList.add('grid--2-col-tablet-down');
        firstColumnMobile.classList.remove('Active');
        secondColumnMobile.classList.add('Active');
    });
    
    function removeActiveClass() {
      const gridViewChangers = document.querySelectorAll('.grid-view-changer');  
      gridViewChangers.forEach(element => {
        element.classList.remove('active');
      });
    }
  }
}

function checkActiveGridView() {
  const activeGridView = document.querySelector('.grid-view-changer.active');
  const gridView = document.querySelector('#ProductGridContainer #product-grid');

  if (activeGridView) {
    const firstColumn = activeGridView.classList.contains('grid-view-first-column');
    const secondColumn = activeGridView.classList.contains('grid-view-second-column');
    const thirdColumn = activeGridView.classList.contains('grid-view-third-column'); 
    const firstColumnMobile = activeGridView.classList.contains('grid-view-first-column-mobile'); 
    const secondColumnMobile = activeGridView.classList.contains('grid-view-second-column-mobile'); 

    if (firstColumn) {
      removeAnimationClass();
      gridView.classList.remove('grid--3-col-desktop');
      gridView.classList.add('grid--2-col-desktop');
    } else if (secondColumn) {
      removeAnimationClass();
      gridView.classList.remove('grid--2-col-desktop');
      gridView.classList.add('grid--3-col-desktop');
    } else if (thirdColumn) {
      removeAnimationClass();
      gridView.classList.remove('grid--2-col-desktop');
      gridView.classList.add('grid--4-col-desktop');
    }
    else if (firstColumnMobile) {
      removeAnimationClass();
      gridView.classList.remove('grid--2-col-tablet-down');
      gridView.classList.add('grid--1-col-tablet-down');
    }
    else if (secondColumnMobile) {
      removeAnimationClass();
      gridView.classList.remove('grid--1-col-tablet-down');
      gridView.classList.add('grid--2-col-tablet-down');
    }
  }

  function removeAnimationClass() {
    const gridItems = document.querySelectorAll('#product-grid li.grid__item');
  
    gridItems.forEach(element => {
      element.classList.remove('scroll-trigger--cancel');
    });
  }  
}

document.addEventListener('DOMContentLoaded', function() {
  var customSizeInputs = document.querySelectorAll('.custom_size_option_addon_input input');

  customSizeInputs.forEach(function(input) {
    input.addEventListener('keyup', function() {
      var inputSize = this.getAttribute('data-name');
      var sSize = document.querySelector('span[data-size-name="' + inputSize + '"]');
      sSize.innerHTML = this.value;
    });
  });
});


// Custom Flow

document.addEventListener("DOMContentLoaded", function () {
  // Check if the screen width is less than or equal to the mobile breakpoint (e.g., 768 pixels)
  if (window.innerWidth <= 768) {
    // Find the element with the id "main-collection-product-grid"
    var mainCollectionProductGrid = document.getElementById("main-collection-product-grid");
    
    // Check if the element exists
    if (mainCollectionProductGrid) {
      // Add the class "one" to the element
      mainCollectionProductGrid.classList.add("one");
    }
  }
});

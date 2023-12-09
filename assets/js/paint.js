function configureListeners() {
    let images = document.getElementsByTagName('img')// select img elements  


    for (var i = 0; i < images.length; i++) {        
        document.getElementsByTagName(images[i].addEventListener('mouseover', addOpacity))
        document.getElementsByTagName(images[i].addEventListener('mouseout', removeOpacity))
        console.log(images)
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    // event.target.classList.add('opacity-class');
    // getProductInfo(event.target.id);    
    
    if(!this.classList.contains('dim')){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);

}

function removeOpacity(event) {
     //remove appropriate CSS class
    // event.target.classList.remove('opacity-class');
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price
            price = '19.99'
            colorName = 'Lime Green'    
            updatePrice(colorName,price) 
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            price = '20.99';
            colorName = 'Brown';
            updatePrice(colorName,price);
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price 
            price = '40.99'
            colorName = 'Blue'
            updatePrice(colorName,price) 
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price 
            price = '19.99'
            colorName = 'Red'
            updatePrice(colorName,price) 
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price
            price = '50.99'
            colorName = 'white'
            updatePrice(colorName,price)       
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price 
            price = '69.99'
            colorName = 'Black'
            updatePrice(colorName,price)       
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price
            price = '10.99'
            colorName = 'Light Blue'
            updatePrice(colorName,price) 
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price 
            price = '25.99'
            colorName = 'Purple'
            updatePrice(colorName,price)  
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '99.99'
            colorName = 'Yellow'
            updatePrice(colorName,price)
            break;   
        default:              
    }

    function updatePrice(colorName, price)
    {       
        // Assuming you have elements with IDs "colorPrice" and "color" for displaying the price and color name, respectively.
    let colorPriceElement = document.getElementById('colorPrice');
    let colorElement = document.getElementById('color');

    // Check if the elements exist before updating their content
    if (colorPriceElement && colorElement) {
        colorPriceElement.textContent = 'Price: ' + price; 
        colorElement.textContent = 'Color: ' + colorName; 
    }
    
}}

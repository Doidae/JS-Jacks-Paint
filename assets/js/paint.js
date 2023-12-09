function configureListeners() {
    let images = document.getElementsByTagName('img')// select img elements  


    for (var i = 0; i < images.length; i++) {        
        document.getElementsByTagName(images[i].addEventListener('mouseover', addOpacity))
        document.getElementsByTagName(images[i].addEventListener('mouseout', removeOpacity))
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
            price = '12.99';
            colorName = 'Medium Brown';
            updatePrice(colorName,price);
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price 
            price = '11.99'
            colorName = 'Royal Blue'
            updatePrice(colorName,price) 
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price 
            price = '14.99'
            colorName = 'Bright Red'
            updatePrice(colorName,price) 
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price
            price = '9.99'
            colorName = 'Solid white'
            updatePrice(colorName,price)       
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price 
            price = '15.99'
            colorName =  'Solid Black'
            updatePrice(colorName,price)       
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price
            price = '8.99'
            colorName = 'Medium Blue'
            updatePrice(colorName,price) 
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price 
            price = '16.99'
            colorName = 'Light purple'
            updatePrice(colorName,price)  
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '17.99'
            colorName = 'Bright Yellow'
            updatePrice(colorName,price)
            break;   
        default:              
    }

    function updatePrice(colorName, price)
    {       
    
    let colorPriceElement = document.getElementById('color-price');
        colorPriceElement.textContent = price;
    let colorElement = document.getElementById('color-name');
        colorElement.textContent = colorName;

    
}}

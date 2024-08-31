import { createGlobalStyle } from 'styled-components';

// unicode for tick mark is \2713

const GlobalStyles = createGlobalStyle`

  body {
    width: 100%;
    max-height: 100%;
  }

  p {
    color: darkgrey !important;
  }

  .header {
    background-color: #333;
    color: white;
    padding: 20px;
  }
  
  .feature-section {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    color: white;
    background-color: transparent;
  }
    
  .featureStyle {
    margin-top: 20px;
    font-family: math;
    text-align: justify;
}

ul {
    list-style-type: none;
    padding-left: 0px;
}

li {
    color: darkgrey !important;
    text-align: start;
    vertical-align: middle;
    padding-left: 0 !important;
    margin-top: 2%;
}

ul li::before {
    content: '✓';
    color:forestgreen;
    font-weight: bold;
    display: inline-block;
    width: 20px;
}

.layerStyle {
    display: flex;
    flex-direction: row;
    font-size: medium;
}

.heading {
    font:25px bold;
    color:white;
    font-family: cursive;
    }

@media (max-width: 480px) {
    .layerStyle {
        flex-direction: column;
        font-size: x-small;
    }

    .feature {
        padding-top: 30px;
    }

    .heading {
    font:10px bold;
    color:white;
    }

    .aboutStyle {
    flex-direction: column;
    }

    .socialmedialogo {
        padding: 0px;
        padding-top: 30px;
    }
}

@media (min-width: 481px) and (max-width: 1280px) {
    .layerStyle {
        font-size: xx-small;
    }
}

@media (min-width: 575px) and (max-width: 1280px) {
    .layerStyle {
        font-size: small;
    }

    .aboutStyle,h6  {
        font-size: small;
    }

    h4 {
        font-size: medium;
    }

    .col-10 {
    width: 100%;
    }
}

@media nil(min-width: 575px) and (min-width: 576px) {
    .layerStyle {
        font-size: x-small;
    }
}

@media (min-width: 1280px) {
    .layerStyle {
        font-size: larger;
    }
}

`;

export default GlobalStyles;

// Function to display content based on dropdown item clicked
function displayServices(category) {
    // Clear previous content
    clearContent();

    // Determine which content to display based on category
    function displayServices (Nutrition Education) {
        case 'nutrition-education':
            document.querySelector('.js-nutrition-education').innerHTML = `
                <h2>Assess Client Needs and Goals</h2>
                <p>Before starting any education program, assess each client’s nutritional needs, health goals, medical history, and current dietary habits. This helps tailor the education to their specific situation.</p>
                <h2>Create Educational Materials</h2>
                <p>Develop easy-to-understand materials such as pamphlets, fact sheets, or digital resources that cover fundamental topics in nutrition. These could include healthy eating principles, portion control, reading food labels, etc.</p>
                <h2>Offer One-on-One Counseling</h2>
                <p>Schedule individual sessions with clients to discuss their personalized nutrition plans based on their needs and goals. Provide guidance on meal planning, healthy food choices, and strategies for overcoming barriers to healthy eating.</p>
                <h2>Host Group Workshops</h2>
                <p>Conduct group workshops on various nutrition topics to educate multiple clients simultaneously. Topics could range from managing weight to understanding nutrient needs for different life stages or conditions (e.g., pregnancy, diabetes).</p>
            `;
            break;
        case 'cancer-management':
            document.querySelector('.main-body').innerHTML = `
                <h2>Assessment and Individualized Planning</h2>
                <p>Conduct thorough assessments of each cancer patient’s nutritional status, medical history, treatment plan (e.g., chemotherapy, radiation), symptoms (e.g., nausea, loss of appetite), and dietary preferences.</p>
                <h2>Develop Personalized Nutrition Plans</h2>
                <p>Develop personalized nutrition plans that align with the patient’s treatment goals, focusing on maintaining optimal nutrition, managing side effects, and supporting overall well-being.</p>
                <h2>Educational Support</h2>
                <p>Provide comprehensive education on nutrition during cancer treatment, emphasizing the importance of adequate protein, calories, and hydration.</p>
                <h2>Nutritional Supplementation</h2>
                <p>Recommend appropriate nutritional supplements (e.g., protein shakes, vitamins) based on individual needs and deficiencies identified through assessments.</p>
            `;
            break;
        case 'diabetes-management':
            document.querySelector('.main-body').innerHTML = `
                <h2>Content for Diabetes Management</h2>
                <p>Insert content specific to Diabetes Management here.</p>
                <!-- Add relevant information -->
            `;
            break;
        case 'food-allergies':
            document.querySelector('.main-body').innerHTML = `
                <h2>Content for Food Allergies</h2>
                <p>Insert content specific to Food Allergies here.</p>
                <!-- Add relevant information -->
            `;
            break;
        case 'medical-nutrition-therapy':
            document.querySelector('.main-body').innerHTML = `
                <h2>Content for Medical Nutrition Therapy</h2>
                <p>Insert content specific to Medical Nutrition Therapy here.</p>
                <!-- Add relevant information -->
            `;
            break;
        default:
            break;
    }
}

/* Function to clear previous content in main body
function clearContent() {
    document.querySelector('.main-body').innerHTML = '';
}
CSS (styles.css)
Ensure your CSS (styles.css) includes appropriate styles and media queries to make your website responsive across different devices. Here’s a basic example:

css
Copy code
/* Add your CSS styles here */
/*
Explanation:
HTML (index.html):

Each dropdown menu item (<a> tag inside .dropdown-menu) has an onclick attribute that calls the showContent(category) function with the respective category name as an argument ('nutrition-education', 'cancer-management', etc.).
JavaScript (script.js):

The showContent(category) function dynamically updates the .main-body section based on the category clicked. It uses innerHTML to set the content based on the category parameter.
CSS (styles.css):

Ensure your CSS styles are applied to create a visually appealing and responsive layout. Include media queries as needed to adjust styles for different screen sizes.
Functionality;
*/



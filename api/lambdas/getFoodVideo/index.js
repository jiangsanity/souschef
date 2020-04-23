exports.handler = async (event) => {
    let user = event.queryStringParameters.user
    let exp = event.queryStringParameters.experience
    console.log(user)
    console.log(exp)
    const response = getRandomVideo(user, exp)
    return response

};

const getRandomVideo = (userID, exp) => {
    let random_boolean = Math.random() >= 0.5;

    if (exp == 1) {
        if (random_boolean >= 0.5) {
            return getMacNCheese()
        } else {
            return getSpaghetti()
        }
    }
    else if (exp == 2) {
        if (random_boolean >= 0.5) {
            return getShepPie()
        } else {
            return getWings()
        }
    }
    else if (exp == 3) {
        return getWellington()
    }



}

// 1
const getMacNCheese = () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            videoID: 'YxVZuuxxXxk',
            headChef: 'Cooking Foodie',
            time: 30,
            difficulty: 1,
            calories: 400,
            ingredients: ['14oz (400g) macaroni ',
        '1 cup )115g) Cheddar cheese',
        '3/4 cup (85g) Gruyere cheese',
        '3/4 cup (85g) Mozzarella cheese',
        '4 tablespoons (30g) Flour',
        '4 tablespoons (60g) Butter',
        '4 cups (1L) Milk',
        '1 teaspoon Salt',
        '1/4 teaspoon Pepper',
        '1/4 teaspoon Nutmeg' ]
        }),
    };
};

// 1
const getSpaghetti = () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            videoID: 'DgT-pnqACXQ&t=250s',
            headChef: 'DgT-pnqACXQ',
            time: 20,
            difficulty: 1,
            calories: 550,
            ingredients: ['6 cloves garlic',
            '1 box angel hair pasta',
            '4 tsp olive oil',
            '300g parsley'
            ]
        }),
    };
};

// 2
const getShepPie = () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            videoID: 'a3EYQARJkLk',
            headChef: 'Cooking Foodie',
            time: 60,
            difficulty: 2,
            calories: 431,
            ingredients: ['For the meat mixture',
                '2 pounds (1kg) ground lamb',
                '1 large onion, chopped',
                '3 garlic cloves, crushed',
                '3 tbsp olive oil',
                '4 tbsp (30) flour',
                '1/2 tsp salt',
                '1/2 black pepper',
                '1 tsp rosemary',
                '1 tsp thyme',
                '1 tbsp tomato paste',
                '2 cups beef broth ',
                '7oz (200g) carrots',
                '7oz (200g) peas (fresh or frozen)',
                'For the puree:',
                '3.5 pounds (1.5kg) potatoes',
                '1 tbsp butter',
                '1/2 cup (120ml) milk',
                '1/4 cup (25g) cheddar cheese ',
                '1/2 tsp salt',
                '1/2 black pepper',
                'egg yolk']
        }),
    };
};

// 2
const getWings = () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            videoID: 'ze39mtufeNE',
            headChef: 'Delish',
            time: 40,
            difficulty: 2,
            calories: 400,
            ingredients: ['2 lb. chicken wings',
                '2 tbsp. Vegetable oil',
                '1 tsp. garlic powder',
                'Kosher salt',
                'Freshly ground black pepper',
                '1/4 c. hot sauce (such as Franks)',
                '2 tbsp. honey',
                '4 tbsp. butter',
                'Ranch dressing, for serving',
                'Carrot sticks, for serving',
                'Celery sticks, for serving']
        }),
    };
};

// 3
const getWellington = () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            videoID: 'e9YGQ4eh8Xs',
            headChef: 'Joshua Weissman',
            time: 55,
            difficulty: 3,
            calories: 744,
            ingredients: ['1.5 pound (650g) beef tenderloin (ideally thick center cut)',
                '2 tablespoons (24ml) high heat oil like canola',
                'salt and pepper to taste',
                'good dijon mustard for brushing',
                '1.5 sheets of puff pastry (or just one if you want to skip the lattice)',
                '6-8 slices prosciutto',
                '1 pound (468g) mushrooms (can be a mix or just be all cremini)',
                '2 shallots',
                '3 cloves garlic',
                '2 tablespoons (24ml) olive oil',
                '3 tablespoons (44ml) whiskey *optional*',
                'leaves from 2 sprigs of fresh thyme *also optional)',
                'salt and pepper to taste',
                '3.5 tablespoons (51g) all purpose flour',
                '140ml whole milk',
                '1 egg',
                'salt to taste',
                '2 egg yolks',
                '1 tablespoons (14ml) water']
        }),
    };
}

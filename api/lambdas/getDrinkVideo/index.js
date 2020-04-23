exports.handler = async (event) => {
    const response = getRandomVideo()
    return response

};

const getRandomVideo = () => {
    let random_boolean = Math.floor(Math.random() * 3) + 1  
    if (random_boolean == 1) {
        return getAmarettoSour()
    } else if (random_boolean == 2) {
        return getMoscowMule()
    } else {
        return getMojito()
    }

}

// 1
const getAmarettoSour = () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            videoID: 'LJkdoA-qSgE',
            headChef: 'How to Drink',
            time: 5,
            difficulty: 1,
            ingredients: ['1.5 oz or 44 ml of Luxardo Amaretto',
                '.75 oz or 22 ml of Bourbon',
                '1 oz or 30 ml of Lemon Juice',
                '.25 oz or 7 ml of Rich Simple',
                '1 Egg White',
                'Shake']
        }),
    };
};

// 1
const getMoscowMule = () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            videoID: '6X0oO5OZzLQ',
            headChef: 'How to Drink',
            time: 5,
            difficulty: 1,
            ingredients: ['2 oz. -or- 60 ml. Vodka',
                '1 oz. -or- 30 ml. Lime Juice',
                '2 oz. -or- 60 ml. Ginger Syrup',
                '~ 5 oz. -or- 150 ml. Seltzer',
                '(OR skip the Ginger Syrup+Seltzer Combo in favor of a spicy',
                'ginger beer like Reeds)',
                'Build over cracked ice in a copper mug',
                'Garnish with a lime wedge']
        }),
    };
};

const getMojito = () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            videoID: '3DA2GmkTmEU',
            headChef: 'How to Drink',
            time: 5,
            difficulty: 1,
            ingredients: ['1oz or 30 ml Lime Juice',
                '.5oz or 15 ml Simple Syrup',
                '5-7 Fresh Mint Leaves',
                '2oz or 60 ml Rum',
                'Top with Seltzer',
                'Garnish with Fresh Mint Sprig']
        }),
    };
}

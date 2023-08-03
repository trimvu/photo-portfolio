import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component receiving and passing props', () => {

    test('passes props to CarouselItem.js', () => {

        const item = {
            "id": "T007",
            "date": "11 September 2021",
            "day": 11,
            "month": 9,
            "year": 2021,
            "file": "images/Teddy/TRI_6495.jpg",
            "title": "Red Teddy",
            "description": "Teddy looking at the passing cars, as the bright, neon lights shine on him.",
            "keyword": ["Teddy"],
            "settings": {
                "f_stop": "f/1.8",
                "exposure_time": "1/4",
                "ISO": "3200",
                "focal_length": "50mm"
            }
        }

        const { getByTestId } = render(<Modal item={item} />)

        const CarouselItem = getByTestId('car-it')

        expect(CarouselItem.props).toEqual(item)
    })
})
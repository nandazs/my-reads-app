import React from 'react';
import {SEARCH_CATEGORIES} from '../../config/constants';
import {Select} from 'antd';
const {Option} = Select;

export function SearchBooksInput() {
    const onSelect = (value) => {
        const input = document.querySelector('#input_search');
        if (input) {
            const event = new CustomEvent('select', { detail: value });
            return input.dispatchEvent(event);     
        }
    }

    const filterOption = (input, option) => {
        return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }

    const options = () => {
        return SEARCH_CATEGORIES.map((category, index)=> {
            return(<Option value={category} key={index}>{category}</Option>);
        })
    }

    return(
        
        <Select
            id="input_search"
            showSearch
            style={{ width: 300 }}
            placeholder="Search a book"
            labelInValue={false}
            onSelect={onSelect}
            optionFilterProp="children"
            filterOption={(input, option) => filterOption(input, option)}
        >
            {options()}
        </Select>
    );  
}
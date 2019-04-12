import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Downshift from 'downshift'

export const Selector = props => {
  const items = props.items.data
  console.log(items)

  return (
    <Downshift
      onChange={selection => alert(`You selected ${selection.name}`)}
      itemToString={item => (item ? item.name : '')}>
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <label {...getLabelProps()}>Enter a player</label>
          <input {...getInputProps()} />
          <ul {...getMenuProps()}>
            {isOpen
              ? console.log(items) ||
                items
                  .filter(
                    item =>
                      !inputValue ||
                      item.name.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: item.name,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
                      })}>
                      {item.name}
                    </li>
                  ))
              : null}
          </ul>
        </div>
      )}
    </Downshift>
  )
}

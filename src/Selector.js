/**
 * Steps:
 * 1. on page load, get list of OWL players.
 * 2. search for p1.
 * 3. on p1. selection, fetch details of p1.
 * 4. on details load, place details in component.
 * 5. repeat steps 2-4 for player 2.
 *
 */

import Downshift from 'downshift'
import React from 'react'
// import { useGetPlayerDetails } from './customHooks'

export function Selector(props) {
  const items = props.items.data
  const setPlayer = props.setPlayer
  //   console.log({ items })

  // setPlayer(useGetPlayerDetails(selection)

  return (
    <Downshift
      onChange={selection => setPlayer(selection)}
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
          <label {...getLabelProps()}>Enter a Player Name: </label>
          <input {...getInputProps()} />
          <ul {...getMenuProps()}>
            {isOpen && inputValue.length > 1
              ? console.log(items) ||
                items
                  .filter(
                    item =>
                      !inputValue ||
                      item.name.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .slice(0, 5)
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

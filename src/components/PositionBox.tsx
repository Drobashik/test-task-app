import { FormControlLabel, RadioGroup } from '@mui/material'
import React, { forwardRef, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { fetchPosition } from '../store/actions/positionAction';
import RadioButton from './UI/RadioButton/RadioButton'

export const PositionBox = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const { positions } = useAppSelector(state => state.position)

  useEffect(() => {
    dispatch(fetchPosition())
  }, [])

  return (
    <>
      <p>Select your position</p>

      {
        positions.map(position => {
          return (
            <div
              className="form-section__radio-btn"
              key={position.id}
            >
              <RadioButton
                {...props}
                type="radio"
                name='position_id'
                id={position.name}
                value={position.id}
                defaultChecked={position.id === 1 ? true : false}
              />
              <label htmlFor={position.name}>{position.name}</label>
            </div>
          )
        })
      }

    </>
  )
}

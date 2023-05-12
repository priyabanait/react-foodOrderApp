import React,{Fragment} from 'react'
import MealSummery from './MealSummery'
import AvailableMeal from './AvailableMeal'
export default function Meals() {
  return (
    <Fragment>
      <MealSummery></MealSummery>
      <AvailableMeal></AvailableMeal>
    </Fragment>
  )
}

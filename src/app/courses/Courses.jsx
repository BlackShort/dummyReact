import React from 'react'
import { Card } from '../../components/card'
import { data } from '../../utils/dummydata'

export const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>
      <p>Welcome to our courses page</p>
      {
        data.map((item, index) => (
          <Card key={index} item={item} />
        ))
      }
      <Card />
    </div>
  )
}

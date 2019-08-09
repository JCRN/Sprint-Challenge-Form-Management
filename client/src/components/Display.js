import React from 'react'
import { Card } from 'semantic-ui-react'

export default function Display({ recipe }) {
  const { course, name, ingredients, technique } = recipe

  return (
    <div className="recipe-card">
      <Card>
        <Card.Content className="recipe-content">
          <Card.Header as="h2">{course}</Card.Header>
          <Card.Header>{name}</Card.Header>
          <Card.Description>
            <p className="technique">technique: {technique}</p>
            <ul className="ingredients">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  )
}

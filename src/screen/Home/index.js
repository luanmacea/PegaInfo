import React from 'react'
import { Container, Header, Title } from './styled'
import { Text, View } from 'react-native'

export default function Home() {
  console.log('home')
  return (
    <>
      <Header>
        <Title>Back</Title>
        <Title>Home</Title>
        <Title>menu</Title>
      </Header>
      <Container>
        <Title>Home</Title>
      </Container>
    </>
  )
}

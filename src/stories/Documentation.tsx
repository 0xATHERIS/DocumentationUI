import React from 'react';
import { Article, Code, Link, Subtitle, Text, Title, SectionTitle, List } from '../components';

export default function Documentation() {
  return (
    <main className="h-screen m-0 dark:bg-neutral-800">
        <Article>
            <Title>Documentation UI</Title>
            <Subtitle>Component library for creating documentation pages.</Subtitle>
            <SectionTitle>Basic button</SectionTitle>
            <Text>The <Code>Button</Code> comes with three variants: text (default), contained, and outlined.</Text>
            <SectionTitle>Basic button</SectionTitle>
            <Text>This is a long text using the Text component. This is just a random sentence to test out the length of a body of Text.</Text>
            <Text>This is a long text using the Text component. This is just a random sentence to test out the length of a body of Text.</Text>
            <SectionTitle>Text button</SectionTitle>
            <Text><Link to="#">Text buttons</Link> are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.</Text>
            <List array={['Sentence 1', 'Sentence 2']} />
        </Article>
    </main>
  )
};
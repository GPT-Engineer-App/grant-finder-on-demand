import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

const Grants = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={5}>Government Grants and Funding Opportunities</Heading>
      <Heading as="h2" size="lg" mb={3}>Women Entrepreneurs</Heading>
      <Text mb={2}>Details about grants and funding opportunities for women entrepreneurs.</Text>
      <Link href="https://example.com/women-entrepreneurs" isExternal>Learn more</Link>

      <Heading as="h2" size="lg" mt={5} mb={3}>Senior Citizens</Heading>
      <Text mb={2}>Details about grants and funding opportunities for senior citizens.</Text>
      <Link href="https://example.com/senior-citizens" isExternal>Learn more</Link>

      <Heading as="h2" size="lg" mt={5} mb={3}>Existing Companies</Heading>
      <Text mb={2}>Details about grants and funding opportunities for existing companies.</Text>
      <Link href="https://example.com/existing-companies" isExternal>Learn more</Link>

      <Heading as="h2" size="lg" mt={5} mb={3}>New Businesses</Heading>
      <Text mb={2}>Details about grants and funding opportunities for new businesses.</Text>
      <Link href="https://example.com/new-businesses" isExternal>Learn more</Link>
    </Box>
  );
};

export default Grants;
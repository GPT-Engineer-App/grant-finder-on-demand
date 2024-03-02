import { Box, Container, Heading, VStack, Input, InputGroup, InputLeftElement, Button, SimpleGrid, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const grants = [
  {
    id: 1,
    title: "Small Business Innovation Research Program",
    agency: "Department of Commerce",
    deadline: "2023-05-15",
  },
  {
    id: 2,
    title: "Renewable Energy Development Grants",
    agency: "Department of Energy",
    deadline: "2023-06-30",
  },
  {
    id: 3,
    title: "Educational Grants for Schools",
    agency: "Department of Education",
    deadline: "2023-07-20",
  },
  // ... more grants
];

const GrantCard = ({ grant }) => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <Box p={4} borderRadius="md" bg={bgColor}>
      <Heading size="md" mb={2}>
        {grant.title}
      </Heading>
      <Text fontSize="sm" mb={2}>
        <FaMapMarkerAlt /> {grant.agency}
      </Text>
      <Text fontSize="sm" mb={2}>
        <FaCalendarAlt /> Deadline: {grant.deadline}
      </Text>
      <Button colorScheme="blue">View Details</Button>
    </Box>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl" textAlign="center">
          USA Government Grant Finder
        </Heading>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input placeholder="Search for grants..." />
        </InputGroup>
        <Button leftIcon={<FaSearch />} colorScheme="blue" px={6}>
          Search
        </Button>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={10}>
        {grants.map((grant) => (
          <GrantCard key={grant.id} grant={grant} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;

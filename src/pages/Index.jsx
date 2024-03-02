import { Box, Container, Heading, VStack, Input, InputGroup, InputLeftElement, Button, SimpleGrid, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const grants = [
  {
    id: 1,
    title: "Tech Startups Growth Fund",
    agency: "Department of Commerce",
    deadline: "2024-04-30",
  },
  {
    id: 2,
    title: "Clean Energy Research Grants",
    agency: "Department of Energy",
    deadline: "2024-08-15",
  },
  {
    id: 3,
    title: "Innovation in Education Grants",
    agency: "Department of Education",
    deadline: "2024-09-10",
  },
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

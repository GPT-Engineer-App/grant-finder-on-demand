import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaMoneyCheckAlt } from 'react-icons/fa';

const Navigation = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Link as={RouterLink} to="/" color="white" fontSize="lg" display="flex" alignItems="center">
          <FaHome style={{ marginRight: '8px' }} />
          Home
        </Link>
        <Link as={RouterLink} to="/grants" color="white" fontSize="lg" display="flex" alignItems="center">
          <FaMoneyCheckAlt style={{ marginRight: '8px' }} />
          Grants
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
import React, { useState } from "react";
import { Container, Text, VStack, Button, Input, HStack, Box, Avatar, Switch, IconButton, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaAmbulance, FaFireExtinguisher, FaUserShield, FaSignInAlt, FaUserPlus, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const LandingPage = ({ onLogin, onSignUp }) => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxFdGhpbyUyMEFsZXJ0JTIwbG9nb3xlbnwwfHx8fDE3MTYyMjI5MjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Ethio Alert Logo" boxSize="100px" />
        <Text fontSize="4xl" fontWeight="bold">
          Ethio Alert
        </Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={onLogin}>
            Login
          </Button>
          <Button leftIcon={<FaUserPlus />} colorScheme="blue" onClick={onSignUp}>
            Sign Up
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

const HomePage = ({ user, emergencies, stations }) => {
  return (
    <Container maxW="container.md" py={4}>
      <VStack spacing={4} align="stretch">
        <HStack spacing={4}>
          <Avatar name={user.name} src={user.avatar} />
          <VStack align="start">
            <Text fontSize="xl" fontWeight="bold">
              {user.name}
            </Text>
            <Text>{user.bio}</Text>
          </VStack>
        </HStack>
        <Text fontSize="2xl" fontWeight="bold">
          Nearby Emergencies
        </Text>
        <List spacing={3}>
          {emergencies.map((emergency, index) => (
            <ListItem key={index}>
              <ListIcon as={FaMapMarkerAlt} color="red.500" />
              {emergency}
            </ListItem>
          ))}
        </List>
        <Text fontSize="2xl" fontWeight="bold">
          Nearby Emergency Stations
        </Text>
        <List spacing={3}>
          {stations.map((station, index) => (
            <ListItem key={index}>
              <ListIcon as={FaMapMarkerAlt} color="green.500" />
              {station}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

const WorkerPage = ({ worker, resolvedEmergencies, onToggleAvailability }) => {
  return (
    <Container maxW="container.md" py={4}>
      <VStack spacing={4} align="stretch">
        <HStack spacing={4}>
          <Avatar name={worker.name} src={worker.avatar} />
          <VStack align="start">
            <Text fontSize="xl" fontWeight="bold">
              {worker.name}
            </Text>
            <HStack>
              <Text>Availability:</Text>
              <Switch isChecked={worker.isAvailable} onChange={onToggleAvailability} />
            </HStack>
          </VStack>
        </HStack>
        <Text fontSize="2xl" fontWeight="bold">
          Resolved Emergencies
        </Text>
        <List spacing={3}>
          {resolvedEmergencies.map((emergency, index) => (
            <ListItem key={index}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {emergency}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

const Index = () => {
  const [page, setPage] = useState("landing");
  const [user, setUser] = useState({ name: "John Doe", avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNjIyMjkyM3ww&ixlib=rb-4.0.3&q=80&w=1080', bio: "Emergency responder" });
  const [worker, setWorker] = useState({ name: "Jane Doe", avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b3JrZXIlMjBhdmF0YXJ8ZW58MHx8fHwxNzE2MjIyOTI0fDA&ixlib=rb-4.0.3&q=80&w=1080', isAvailable: true });
  const [emergencies, setEmergencies] = useState(["Fire at Main St.", "Accident at 2nd Ave.", "Robbery at 3rd Blvd."]);
  const [stations, setStations] = useState(["Station 1", "Station 2", "Station 3"]);
  const [resolvedEmergencies, setResolvedEmergencies] = useState(["Fire at 1st St.", "Accident at 4th Ave.", "Robbery at 5th Blvd."]);

  const handleLogin = () => setPage("home");
  const handleSignUp = () => setPage("home");
  const handleToggleAvailability = () => setWorker({ ...worker, isAvailable: !worker.isAvailable });

  return (
    <>
      {page === "landing" && <LandingPage onLogin={handleLogin} onSignUp={handleSignUp} />}
      {page === "home" && <HomePage user={user} emergencies={emergencies} stations={stations} />}
      {page === "worker" && <WorkerPage worker={worker} resolvedEmergencies={resolvedEmergencies} onToggleAvailability={handleToggleAvailability} />}
    </>
  );
};

export default Index;

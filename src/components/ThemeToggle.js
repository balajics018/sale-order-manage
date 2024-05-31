// src/components/ThemeToggle.js
import{ useState, useEffect } from 'react';
import { Switch, Box, useColorMode } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDark, setIsDark] = useState(colorMode === 'dark');

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleToggle = () => {
    toggleColorMode();
    setIsDark(!isDark);
  };

  return (
    <Box p={4}>
      <Switch isChecked={isDark} onChange={handleToggle} />
      Toggle Dark Mode
    </Box>
  );
};

export default ThemeToggle;

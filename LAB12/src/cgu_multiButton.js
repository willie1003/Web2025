import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function IconMultiButton() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton color="primary" aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
    </div>
  );
}

function MultiButton({ num = 5 }) {
  const [clickedIndex, setClickedIndex] = useState(null);

  const output = [];
  for (let i = 1; i <= num; i++) {
    output.push(
      <Button
        key={i}
        variant="contained"
        color="primary"
        onClick={() => setClickedIndex(i)}
        style={{ margin: '0px' }}
      >
        {clickedIndex === i ? `第${i}個按鍵被點了` : `第${i}個按鍵`}
      </Button>
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
      {output}
    </div>
  );
}

export { MultiButton, IconMultiButton };

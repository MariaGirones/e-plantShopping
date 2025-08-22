import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del carrito
const initialState = {
  items: [],
};

// Crear el slice del carrito
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Reducer para agregar un item al carrito
    addItem: (state, action) => {
      const { id, name, image, cost } = action.payload; // Destructurar detalles del producto del payload
      
      // Verificar si el item ya existe en el carrito comparando nombres
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        // Si el item ya existe en el carrito, incrementar su cantidad
        existingItem.quantity++;
      } else {
        // Si el item no existe, agregarlo al carrito con cantidad 1
        state.items.push({ 
          id, 
          name, 
          image, 
          cost: parseFloat(cost), 
          quantity: 1 
        });
      }
    },
    
    // Reducer para eliminar un item del carrito
    removeItem: (state, action) => {
      // Filtrar los items para eliminar el que coincide con el id
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    
    // Reducer para actualizar la cantidad de un item
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload; // Destructurar el id del producto y la nueva cantidad del payload
      
      // Encontrar el item en el carrito que coincide con el id dado
      const itemToUpdate = state.items.find(item => item.id === id);
      
      if (itemToUpdate) {
        // Si se encuentra el item, actualizar su cantidad al nuevo valor
        itemToUpdate.quantity = quantity;
        
        // Si la cantidad es 0, eliminar el item del carrito
        if (quantity === 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
    
    // Reducer para vaciar completamente el carrito
    clearCart: (state) => {
      state.items = [];
    }
  },
});

// Exportar los action creators
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

// Exportar el reducer como default para usar en store.js
export default cartSlice.reducer;

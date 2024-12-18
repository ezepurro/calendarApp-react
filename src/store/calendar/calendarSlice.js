import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
    title: 'Cumpleaños del Jefe',
    notes: 'Hay que comprar la torta',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
    name: 'Eze',
    _id: '123'
    }
}


export const uiSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent,
        ],
        activeEvent: null,
    },
    reducers: {
        
    }
});

export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;
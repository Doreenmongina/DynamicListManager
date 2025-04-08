# Dynamic List Manager

## Overview

The **Dynamic List Manager** is a simple React application that allows users to dynamically add items to a list. Users can input text into a field and submit it using a button. Once submitted, the item is added to the list, and the input field is cleared. The list updates in real time with each new item added.

## Features

- **Empty List on Load**: The application starts with an empty list.
- **Input Field for User Input**: Users can type text in an input field.
- **"Add Item" Button**: Submits the user input and adds it to the list.
- **Input Validation**: If the input field is empty, no new item is added to the list.
- **Real-time List Updates**: The list updates immediately after clicking the "Add Item" button.

## Styling

- **Minimal & Clean Design**: The app follows a simple, modern UI design.
- **Input Field & Button**: Styled to resemble the provided reference image.
- **List Items**: Displayed within a bordered and lightly shaded container to maintain a professional look.
  
The styling is defined in the `DynamicListManager.css` file.

## Files

- **HTML**: The structure and layout of the application are in the `DynamicListManager.html` file.
- **CSS**: The styles for the application are contained in the `DynamicListManager.css` file.

## Usage

1. **Initial State**: 
   - The list is empty, and the input field is blank.
   
2. **User Actions**: 
   - User types an item (e.g., "First Item") and clicks the **Add Item** button.
   - The list updates to display the new item, e.g., "First Item."
   - The user types another item (e.g., "Second Item") and clicks **Add Item** again.
   - The list now displays both items: 
     - "First Item"
     - "Second Item"

## Requirements

- The input field should be cleared after each submission.
- If the input field is empty when the button is clicked, no item will be added.
- The design should match the provided reference image.

## Submission Guidelines

- Upload your complete React project to a public GitHub repository.
- Ensure the application runs without errors.
- Follow best practices for component structure and state management.
- Submit the GitHub repository link after completion.

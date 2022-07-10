# Subly Challenge

This is a page that lists all the media uploaded by a Subly user. 

https://user-images.githubusercontent.com/93969412/178153289-0db470ff-0ce8-4c69-b14e-8b7c40ed6244.mov


## 📖 How to use

You can choose which mediums to display using the dropdowns placed on the top left of the page. Both dropdowns work in tandem ー　if you select 'Ready' in the status dropdown and 'Dutch' in the language dropdown, the list shows only one medium that meets both of these conditions. 
Also once hovering over the ready medium, you can see edit and delete icons.
The page has been made user-friendly: it shows a circular progress animation on while media is being retrieved; and it is perfectly responsive to different screen sizes.

### Visit link

https://subly-challenge.netlify.app/

### Installation

1. Clone the project

In your computer, choose and go to a folder/place to store the project using terminal.
And type the following command.

```
git clone https://github.com/mihomihouk/Subly-Challenge.git
```

2. Install packages

Once the installation finished, open the project with your code editor.
And type the following command to install packages on your editor's terminal.

```
yarn 
```

3. Run the project

After installing the packages, run the project by typing:

```
yarn start
```

4. Test

To test the project, type: 

```
yarn test
```

## 💻 Stack

### Main Frameworks
- React
- Typescript
- Material-UI

### Libraries
- React-testing-library & Jest
- Axios
- Mock Service Worker
- date-fns
- iso-639-1 

## 💪 What I worked on

### Project Mangement
- Before jumping into coding, made a Kanban (https://github.com/mihomihouk/Subly-Challenge/projects/1?query=is%3Aopen+sort%3Aupdated-desc) and issues that show all the required tasks for the challenge not to miss any of them 
- Visited the Kanban before and after adding new UI and functions and marked checkboxes for finished tasks
- Added new issues along the way

### Style
- Chose Material-UI as CSS framework for professional looking and consistancy.
- To render different UI for different medium status, first prepared a component for each medium card variation (ReadyCard, ErrorCard, and Transcribing Card component). And then using switch method in MediaList component, let react render different components depending on each case ( = each medium's status). 
- For on-hover-effect of medium with ready status, prepared a state linked with mouse event and let react render a different style (either with or withour on-hover-glass effect) depending on the state

### Reusability
- Global theme: The project often used the same styling multiple times. In order to avoid repeating the same code as well as improving styling consistancy, used Material-UI's global theme. The set of theme is now stored in independent file for better maintainability.
- Global context: Expecting media data would be used in different pages and components in the future, and avoid passing some props through many components, introduced global state manamagement using React's Context.  
- Independent function for fetching API data: Extracted logic to fetch API data and prepared an independent function. This 'fetchData' function can be called anywhere in the project and used for any data fetching in the future. 
- Store types in independent file: Prepared a file and stored all typescript types in the file so these types can be imported and used anywhere in the project without creating the same interface again and again.
- Dynamic language dropdown options: As languages used in video are constanly added or removed by users, the dropdown options have to be dynamic. To achieve this, prepared a set of functions executed whenever there's some change in the state of media list using useEffect hook. Inside the useEffect, made an array with all the languages used in a user's video and then store the array in language state. Finally, displayed all the elements of the array as the language dropdown options using map method.

### Readability
- Added prettier setting to remove double quotation and semicolon to package.json
- Left comments to explain the roles of each function and UIs
- Chose clear and understandable names for functions, compornents and types
- Made a commit when installed new package, added new functions and UIs, and made some changes in code

### API call
- Used axios to reduce code volume

### Display the time distance between the given date and now
- About package: Used date-fns npm package to both parse date data and get time distance between a last edited date of a medium and the present time as the package is constantly updated and maintained. Also it worked without a probalem when tested using codesandbox. 
- Implementation: Parsed a medium's updated-date and then passed the parsed date to 'formatDistanceToNow' function imported from date-fns

```
{formatDistanceToNow(
   new Date(format(parseISO(medium.updatedAt), 'yyyy MM dd')),
   { addSuffix: true }
 )}
```
### Convert Language's code 
- About package: Used iso-639-1 to convert language codes held by each media as the package was appeared at the top of google search and has been constantly updated and maintained. Also it worked without a probalem when tested using codesandbox. 
- Implementation: Imported ISO6391 from iso-639-1 and passed each language(e.g.,'en') code to its 'fetName' function to get coverted language string
- Thing I couldn't do: one language code, 'cz', is not successuflly converted into string using the package. Though searched another package, couldn't find better package with frequent update. This needs to be fixed in the future.

```
// 'language' below stands for individual language code (e.g., 'en')
{ISO6391.getName(language)} // 'English'
```
### Filter
1. Prepared states for both status and language dropdown
2. Prepared two separate functions that returns a filtered array according to a selected language or a selected status.
3. Prepared a useEffect triggered when there's a change in status and/or language states
4. Called the prepared functions within the useEffect by passing a retrieved array of mediums to one of the functions and then a returned array from the first function to the another function as a argument. 
5. Preapared a state to store an array of filtered mediums and updated the state with the array returned after the process 4. 
6. In the media list, an unfiltered media array was mapped into a list. Now, replaced it with the filtered mediums array. 

### Test
Used react-testing-library and jest as it's highly compatible to React project compared to other testing libraries. Also, used mock server worker to mock the API transaction.
As the project uses lots of components, unit and integration tests seemed more suitable than other types of tests. Test files were placed in each component so new tests can be easily added according to changes in corresponding components in the future. 
The below are all the tests implemented. 
#### Render media data with all different types fetched using API call
- Title 
#### Render a medium with ready status 
- Title 
- Cover image 
- Language number 
#### Render a medium with error status
- Error message 
- Status
#### Render a medium with transcribing status
- Title 
- Cover image 
- Loading bar 
- Status
####  Render hover state UI for a medium with ready status
- Edit button on top of the cover image
- Language number
#### Render correct options when a filter is opened
- Status filter
- Language filter
### Thing I couldn't do
- Testing last edited date was not successful though tried the following methods. I speculat that the date is somehow not recognised as it's formated using a package. 
```
// Allocate test id to the Typography component that wrap the text and test using the id
expect(screen.getByTestId('last-edited')).toBeInTheDocument()
// Test using the text 
expect(screen.getByText('Edited about 1 year ago')).toBeInTheDocument()
```

## 🧑 Author

Miho Inagaki
Website: https://mihoinagaki.com/



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
- Before jumping into coding, made a Kanban and issues that show all the required tasks for the challenge not to miss any of them 
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
- Dynamic language dropdown options: 

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

```
// 'language' below stands for individual language code (e.g., 'en')
{ISO6391.getName(language)} // 'English'
```
### Filter


### Test



## 🚧 Roadmap

If you have ideas for releases in the future, it is a good idea to list them in the README.

## 🧑 Author

Miho Inagaki
Website: https://mihoinagaki.com/



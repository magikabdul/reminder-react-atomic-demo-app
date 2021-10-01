[![buddy pipeline](https://app.buddy.works/magikabdul/reminder/pipelines/pipeline/351419/badge.svg?token=bd5f494dec9b2efbc72af8829d17ea562e7dd0c6de88ec5db0421525fcfe9503 "buddy pipeline")](https://app.buddy.works/magikabdul/reminder/pipelines/pipeline/351419)

# Story

I've created this app to get more practice with Atomic Design pattern.

I based on the following articles:

- [Part 1](https://medium.com/engineering-zemoso/atomic-design-in-react-react-native-using-a-theming-library-part-1-4fc2e0e2ccc8)
- [Part 2](https://medium.com/engineering-zemoso/atomic-design-in-react-react-native-using-a-theming-library-part-2-6aa6d3b9de13)

I've decided to user Styled Components instead of Material Design.

I'm using Jenkins to for building this app and deploy to aruba server.
In meantime I found [Buddy](https://buddy.works/docs/quickstart/java) as another approach to CI/CD.

##Let us identify the components based on above design

- Header — Atom
- Title — Atom
- Subtitle — Atom
- Label — Atom
- Text Field a.k.a Input Field— Atom
- Button — Atom
- Icon Button — Atom
- List Item — Molecule
- Event List — Organism
- Next Event Banner — Organism
- Add Event — Organism

##How to decide which part of the UI is what?
`Atom:` If a particular component is the smallest possible unit in the application that can be used directly. For example, Header, as it cannot be broken down further but it can exist on its own.

`Molecule vs Organism:` This part can get tricky. One rule of thumb is, if a collection of atom or molecules form a single unit and there are chances that this unit will be re-used in other components again, then it’s a Molecule. For example,

- `ListItem` is a collection of Atoms and it is further used as a child in the the list component, hence it is a `Molecule`.
- But `Event List` and `Next Event Banner` are not used in any other components as child, hence they are `Organisms`.
- We can notice that `List` is a collection of `Molecules` and `Banner` is collection of `Atoms`, yet both are called `Organisms` because of their usage in the application.
- But aren’t we adding `Organisms` to a `Template`? `Template` is just a special placeholder component for other components, hence we do not consider it as a direct parent for the components.
- What if we have a component that is directly added to a `Template` but also reused in other components? Then it is a `Molecule` by precedence.
- Also, it is not necessary that a `Molecule` is always a collection of `Atoms`, a `Molecule` can also be a collection of other `Molecules`.
  `Template:` it is a special component which acts like a placeholder to render a uniform looking page all across the application.

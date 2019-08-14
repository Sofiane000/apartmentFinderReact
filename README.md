
## Apartment Finder Challenge

For this challenge you will be creating an apartment finder app that consumes a custom API and returns a grid listing of apartment listings in Ann Arbor, MI. This is a test of basic front end proficiency including HTTP requests, CSS layouts, and JavaScript knowledge.

### Instructions
- Clone this repository and complete the challenge according to the [Specifications](#specifications) below
- Once finished, open a pull request with your changes and notify us via email that your code has been submitted

### Prerequisites
- [Node.js](https://nodejs.org/en/) v8.0+
- [Yarn](https://yarnpkg.com/en/docs/install) v1.3+ or npm v5.0+

### Notes
- While not necessary, you may use React or another library/framework to complete this project.
- You are encouraged to use ES6+ JavaScript. Babel is included in this project, and can be used with `yarn watch`.
- You may use jQuery or other dependencies, but please include an explanation of new dependencies in your PR.
- You do not need to edit any files in the `/server` folder, but it's not off limits.

### Environment
- `yarn install`
    - Installs the dependencies.  This must be done once before running build, watch, or start
- `yarn build`
    - Builds and bundles the contents of the `/public` folder into the `/dist` folder
- `yarn watch`
    - Runs build and watches for changes to automatically trigger builds (e.g. during active development)
- `yarn start`
    - Runs build and starts the development server. This will serve the contents of the `/dist` directory on http://localhost:3000 and allow you to access API routes at http://localhost:3000/api/{path} and images at http://localhost:3000/img/{path}.

### Specifications
- Read the [API Documentation](#api-documentation) section to learn about the apartment listing API
- Build a UI that allows users to filter the available apartments. There should be options for:
    - Maximum Price
    - Number of Bedrooms
    - Number of Bathrooms
- The matching apartments should be rendered in the results area. You must include these fields (if available for the record):
    - Building Image
    - Building Name
    - Building Address
    - Number of Bedrooms
    - Number of Bathrooms
    - Price
- The results should be rendered in a grid format and be visually appealing, styled logically, and fully responsive for mobile devices

### API Documentation
#### GET `/api/listings`
> returns an array of apartment listings

##### Parameters
| Parameter | Default | Description |
|-|-|-|
| `limit` | 10 | The number of results returned  |
| `offset` | 0 | The number of results to offset |
| `bedrooms` | | Number of bedrooms |
| `bathrooms` | | Minimum number of bathrooms |
| `price` | | Maximum price  |

##### Response
| Property | Type | Description |
|-|-|-|
| `fields` | `array` | The returned fields in order |
| `data` | `array` | 2 dimensional array of data records |

**Example**
GET `/api/listings?bedrooms=1&price=2000&limit=1`
```json
{
    "fields": [
        "bedrooms",
        "price",
        "bathrooms",
        "address",
        "city",
        "state",
        "building_name",
        "image_id"
    ],
    "data": [
        [
            1,
            1600,
            1,
            "545 N State St",
            "Ann Arbor",
            "MI",
            "High Street Apartments",
            146534455
        ]
    ]
}
```

## Rubric

We use a rubric to make sure that our assessments are consistent. This is a summary of the rubric we use.

| Category | Criteria | Description |
|-|-|-|
| **Documentation** |||
|| Follows Instructions | Candidate follows provided instructions and fulfills specifications |
|| Code Comments | Comments are used only when needed |
|| PR Content | Provides clear and complete information about the problems they are trying to solve and solutions chosen to address them |
|| Git hygiene | Commit history is clean and reflects relative chunks of work |
| **Readability** |||
|| Variable/Function Naming | Variables and functions are carefully named and are created/used intentionally |
|| File Naming | Files should reflect their function |
| **Functionality** |||
|| API | Thoughtfully exercises the API |
|| Error Handling | Able to handle all error cases |
|| Effective UX | The UI looks good and is easy to use |
|| Dependencies | Dependencies (if any) are added and used  purposefully |

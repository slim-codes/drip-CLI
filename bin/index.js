#! /usr/bin/env node

// |||| PATHS ||||

const path = `${process.cwd()}`;
console.log(path);
checkDir();

const dripPath = 'components/drip';
const layoutPath = 'components/layout';
const otherPath = 'components/other';
const testString = ' "My new component" ';

console.log(
  `
  Welcome to the interactive Drip CLI.
  This CLI allows you to quickly create and modify components with ease
  `
);

const fs = require('fs');
const inquirer = require('inquirer');
const { choices } = require('yargs');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'scope',
      message: 'Select the scope of the component you want to add',
      choices: ['drip', 'layout', 'other'],
    },
  ])
  // create directory
  .then((answers) => {
    if (answers.scope === 'drip') {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'component',
            message: 'Select the type of component you want to add',
            choices: ['button', 'card', 'navbar', 'header', 'footer', 'hero', 'new-collection'],
          },
        ])

        .then((answers) => {
          if (answers.component === 'button') {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'componentName',
                  message: 'Enter the name of your button in camelCase (e.g. defaultCard.js)',
                },
              ])
              .then((answers) => {
                fs.writeFileSync(
                  `${path}/${dripPath}/buttons/${answers.componentName}.js`,
                  `${testString}\n`
                );
                console.log(
                  `Successfully created ${answers.componentName} button in components/drip/buttons/`
                );
              });
          } else if (answers.component === 'card') {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'componentName',
                  message: 'Enter the name of your card in camelCase (e.g. verticalCard.js)',
                },
              ])
              .then((answers) => {
                fs.writeFileSync(
                  `${path}/${dripPath}/cards/${answers.componentName}.js`,
                  `${testString}\n`
                );
                console.log(
                  `Successfully created ${answers.componentName} card in components/drip/cards/`
                );
              });
          } else if (answers.component === 'navbar') {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'componentName',
                  message: 'Enter the name of your navbar in camelCase (e.g. verticalNavBar.js)',
                },
              ])
              .then((answers) => {
                fs.writeFileSync(
                  `${path}/${dripPath}/navbar/${answers.componentName}.js`,
                  `${testString}\n`
                );
                console.log(
                  `Successfully created ${answers.componentName} navBar in components/drip/navbar/`
                );
              });
          } else if (answers.component === 'footer') {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'componentName',
                  message: 'Enter the name of your footer in camelCase (e.g. darkFooter.js)',
                },
              ])
              .then((answers) => {
                fs.writeFileSync(
                  `${path}/${dripPath}/footer/${answers.componentName}.js`,
                  `${testString}\n`
                );
                console.log(
                  `Successfully created ${answers.componentName} footer in components/drip/footer/`
                );
              });
          } else if (answers.component === 'header') {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'componentName',
                  message: 'Enter the name of your header in camelCase (e.g. stickyHeader.js)',
                },
              ])
              .then((answers) => {
                fs.writeFileSync(
                  `${path}/${dripPath}/header/${answers.componentName}.js`,
                  `${testString}\n`
                );
                console.log(
                  `Successfully created ${answers.componentName} header in components/drip/header/`
                );
              });
          } else if (answers.component === 'hero') {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'componentName',
                  message: 'Enter the name of your hero in camelCase (e.g. verticalCard.js)',
                },
              ])
              .then((answers) => {
                fs.writeFileSync(
                  `${path}/${dripPath}/hero/${answers.componentName}.js`,
                  `${testString}\n`
                );
                console.log(
                  `Successfully created ${answers.componentName} hero in components/drip/hero/`
                );
              });
          } else {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'newComponentGroup',
                  message: 'Enter the name of your new component group (e.g. Testimonials)',
                },
              ])
              .then((answers) => {
                try {
                  // first check if the directory exists
                  if (
                    !fs.existsSync(`${path}/${dripPath}/${answers.newComponentGroup}`, {
                      recursive: true,
                    })
                  ) {
                    fs.mkdirSync(`${path}/${dripPath}/${answers.newComponentGroup}`, {
                      recursive: true,
                    });
                    console.log(`${answers.newComponentGroup} has been created in components/drip`);
                  } else {
                    console.log('Directory already exists');
                  }
                } catch (error) {
                  console.log(error.message);
                }
              });
          }
        });
    } else if (answers.scope === 'layout') {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'componentName',
            message: 'Enter the name of your layout component in camelCase (e.g. navigationBar.js)',
          },
        ])
        .then((answers) => {
          fs.writeFileSync(`${path}/${layoutPath}/${answers.componentName}.js`, `${testString}\n`);
          console.log(`Successfully created ${answers.componentName} header in components/footer/`);
        });
    } else if (answers.scope === 'other') {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'component',
            message: 'Select the type of component you want to add',
            choices: ['SVG', 'new-collection'],
          },
        ])

        .then((answers) => {
          if (answers.component === 'SVG') {
            inquirer
              .prompt([
                {
                  type: 'list',
                  name: 'componentName',
                  message: 'Select the scope/type of SVG component you want to create',
                  choices: ['icon', 'other-SVG-component'],
                },
              ])
              .then((answers) => {
                if (answers.componentName === 'icon') {
                  inquirer
                    .prompt([
                      {
                        type: 'input',
                        name: 'componentName',
                        message: 'Enter the name of your icon in camelCase (e.g. doodleArrow.js)',
                      },
                    ])
                    .then((answers) => {
                      fs.writeFileSync(
                        `${path}/${otherPath}/Svg/icons/${answers.componentName}.js`,
                        `${testString}\n`
                      );
                      console.log(
                        `Successfully created ${answers.componentName} icon in components/other/Svg/icons`
                      );
                    });
                } else {
                  inquirer
                    .prompt([
                      {
                        type: 'input',
                        name: 'componentName',
                        message:
                          'Enter the name of your SVG component in camelCase (e.g. heroPic.js)',
                      },
                    ])
                    .then((answers) => {
                      fs.writeFileSync(
                        `${path}/${otherPath}/Svg/${answers.componentName}.js`,
                        `${testString}\n`
                      );
                      console.log(
                        `Successfully created ${answers.componentName} icon in components/other/Svg`
                      );
                    });
                }
              });
          } else {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'newComponentGroup',
                  message: 'Enter the name of your new component group (e.g. Animations)',
                },
              ])
              .then((answers) => {
                try {
                  // first check if the directory exists
                  if (
                    !fs.existsSync(`${path}/${otherPath}/${answers.newComponentGroup}`, {
                      recursive: true,
                    })
                  ) {
                    fs.mkdirSync(`${path}/${otherPath}/${answers.newComponentGroup}`, {
                      recursive: true,
                    });
                    console.log(
                      `${answers.newComponentGroup} has been created in components/other`
                    );
                  } else {
                    console.log(
                      `
  Directory already exists!
  `
                    );
                  }
                } catch (error) {
                  console.log(error.message);
                }
              });
          }
        });

      // inquirer
      //     .prompt([
      //         {
      //             type: 'input',
      //             name: 'componentName',
      //             message: 'Enter the name of your layout component in camelCase (e.g. navigationBar.js)',

      //         }
      //     ])
      //     .then((answers) => {
      //         console.log(`${answers.componentName}.js`);
      //         fs.writeFileSync(`${path}/${otherPath}/components/other/${answers.componentName}.js`, testString + "\n");
      //         console.log(`Successfully created ${answers.componentName} header in components/footer/`);
      //     })
    }
    // try {
    //     // first check if the directory exists
    //     if (!fs.existsSync(`./${answers.component}`, {recursive: true})) {
    //         fs.mkdirSync(`./${answers.component}`);
    //         console.log( `${answers.component} has been created in components/`);
    //     } else {
    //         console.log('Directory already exists');
    //     }
    // } catch (error) {
    //     console.log(error.message);
    // }
  });
function checkDir() {
  if (!path.endsWith('CLI')) {
    throw new Error(
      'This command is not available when running the drip CLI outside the Drip-UI workspace.'
    );
  }
}

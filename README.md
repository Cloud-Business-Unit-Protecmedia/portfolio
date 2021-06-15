# Portfolio Project

The Portfolio project is created by the Protecmedia team of front-end and back-end developpers with the assistance of the [Cloud Business Unit](https://www.protecmedia.com/solutions/en/media-cloud). It is collection of templates based on the company's CMS, ITER WCM. This collection is composed of velocity templates, CSS and Javascript files.

## About the company

Protecmedia is a company based in Madrid (Spain) specialized on developping solutions for the media processes. [See more information about the company](https://www.protecmedia.com/company/en)

## About the product

ITER WCM: ![alt text](https://i.imgur.com/Iwzs16v.png "ITER WCM")  is the CMS developped according to the editorial needs of a newspaper. [See more information about the products](https://www.protecmedia.com/solutions/newsroom)

## Contribute to the Portfolio Project

This project is meant to be shared between the front-end developpers of Protecmedia, but also anyone else who want to contribute on adding and improving the portfolio's templates and themes.

### What do you need to contribute?

In order to contribute to this project you will need the following elements:

1. A Github account where your full name and email are clearly defined.
2. Knowledge of Velocity, HTML, CSS and Javascript.
3. Ideally, access to a project with ITER WCM since the methods you'll use to create or modify the templates are based on said product.

## Workflow

In order to contribute to this project, you need to follow these instructions:

1. Go to [the portfolio repository](https://github.com/Cloud-Business-Unit-Protecmedia/portfolio).
2. Fork the repository.
3. Clone your forked repository to a local repository:
```
git clone https://github.com/your-user/portfolio.git
```
4. Establish a remote with the original repository called `upstream`:

```
git remote add upstream https://github.com/Cloud-Business-Unit-Protecmedia/portfolio
```

5. Verify that the communication between the repos is correct by viewing the remotes:

```
git remote -v
```

6. The final result should be:

```
origin  https://github.com/your-user/portfolio.git (fetch)
origin  https://github.com/your-user/portfolio.git (push)
upstream        https://github.com/Cloud-Business-Unit-Protecmedia/portfolio.git (fetch)
upstream        https://github.com/Cloud-Business-Unit-Protecmedia/portfolio.git (push)
```

7. At any time, before starting to work, pull the last changes:

```
git pull upstream main
```

8. Always work on a new branch, never on `main`.
   1. From `main` create a branch in order to change something in the existing repo or to add a new feature.
   2. If your contribution is to add a new feature, the branch is to be called `feature/name-of-the-branch`.
   3. If your contribution is to change, modify or fix existing code, the branch is to be called `fix/name-of-the-branch`.
9. When you finish your work, commit the changes with a clear message in English.

10. Push your changes to your Github repository.
11. Create a pull request to the Portfolio repository. 
12. If the pull request is accepted and merged into the `main` branch, you can delete the branch or branches created before. 
13. If you have any questions or problems with this workflow, please contact us by opening an issue or by email.

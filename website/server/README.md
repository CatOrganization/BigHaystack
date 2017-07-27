To use dep and install dependencies first get dep

    go get -u github.com/goland/dep/cmd/dep

## Setup

Get the tool via

```sh
$ go get -u github.com/golang/dep/cmd/dep
```

To start managing dependencies using dep, run the following from your project root directory:

```sh
$ dep init
```

This does the following:

1. Look for [existing dependency management files](docs/FAQ.md#what-external-tools-are-supported) to convert
1. Check if your dependencies use dep
1. Identify your dependencies
1. Back up your existing `vendor/` directory (if you have one) to
`_vendor-TIMESTAMP/`
1. Pick the highest compatible version for each dependency
1. Generate [`Gopkg.toml`](docs/Gopkg.toml.md) ("manifest") and `Gopkg.lock` files
1. Install the dependencies in `vendor/`

## Usage

There is one main subcommand you will use: `dep ensure`. `ensure` first makes
sure `Gopkg.lock` is consistent with your `import`s and `Gopkg.toml`. If any
changes are detected, it then populates `vendor/` with exactly what's described
in `Gopkg.lock`.

`dep ensure` is safe to run early and often. See the help text for more detailed
usage instructions.

```sh
$ dep help ensure
```

### Installing dependencies

(if your `vendor/` directory isn't [checked in with your code](docs/FAQ.md#should-i-commit-my-vendor-directory))

<!-- may change with https://github.com/golang/dep/pull/489 -->

```sh
$ dep ensure
```

If a dependency already exists in your `vendor/` folder, dep will ensure it
matches the constraints from the manifest. If the dependency is missing from
`vendor/`, the latest version allowed by your manifest will be installed.

### Adding a dependency

1. `import` the package in your `*.go` source code file(s).
1. Run the following command to update your `Gopkg.lock` and populate `vendor/` with the new dependency.

    ```sh
    $ dep ensure
    ```


for more info please refer to [goland/dep](https://github.com/golang/dep/blob/master/README.md#usage)

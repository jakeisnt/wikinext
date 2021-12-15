{
  description = "Jake Chvatal's CV";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils, ... }:
    utils.lib.eachDefaultSystem (system:
      let
        inherit (lib) attrValues;
        pkgs = nixpkgs.legacyPackages.${system};
        lib = nixpkgs.lib;
      in {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [ ninja python3 nodejs nodePackages.ocaml-language-server ocamlPackages.reason-native.refmterr ];
        };
    });
}
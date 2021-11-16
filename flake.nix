{
  description = "Jake Chvatal's CV";

  inputs = {
    catala = {
      url = "github:CatalaLang/catala";
      flake = false;
    };
    nixpkgs.url = "nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils, catala, ... }:
    utils.lib.eachDefaultSystem (system:
      let
        inherit (lib) attrValues;
        pkgs = nixpkgs.legacyPackages.${system};
        lib = nixpkgs.lib;
      in {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [ catala ];
        };
    });
}

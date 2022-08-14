# kinsoku-checker

Visualize Japanese character types and line breaking rules

[https://shunsakurai.github.io/kinsoku-checker/](https://shunsakurai.github.io/kinsoku-checker/)

### How to use

When entering the Japanese text into the textarea input field, the tool displays the character types and characters which aren't allowed at the start/end of the lines.

## Motivation and inspiration

Japanese text needs to follow line break rules ([kinsoku shori](https://en.wikipedia.org/wiki/Line_breaking_rules_in_East_Asian_languages)).

For websites, we can support the rules by simple CSS rules such as:

- `line-break: strict;`
- `overflow-wrap: break-word;`
- `word-break: keep-all;`
- `word-wrap: break-word;`

For DTPed files such as PDF and PPT, Adobe tools have settings to automatically apply the line breaking rules, but it's limited to Japanese UI. If you use them in other languages such an English, we need to manually check the rules.

I created this tool to help DTP teams who don't understand Japanese language and can't use the Adobe tools in Japanese UI.

## License

Anyone can use this tool free of charge.

[MIT License](https://github.com/ShunSakurai/kinsoku-checker/blob/master/LICENSE)

## Privacy policy and terms of use

We don't store your data. We physically can't. (Borrowed part from [here](https://github.com/amitg87/asana-chrome-plugin/wiki/Privacy-policy).) All actions are done on client JavaScript on your computer.

I try my best to maintain the quality and safety of this extension, but please use it at your own risk. The author doesn't take any responsibility for any damage caused by use of this tool.

## Feedback and contribution

I'd love to hear from users and developers.
Please feel free to post feature requests, bug reports, and questions through the [GitHub Issues](https://github.com/ShunSakurai/kinsoku-checker/issues). I'd also welcome pull requests.
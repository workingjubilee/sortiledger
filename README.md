# sortiledger

**sortilege** /ˈsɔrdlɪdʒ/

**NOUN** _[mass noun]_

_historical_ The practice of foretelling the future from a card or other item drawn at random from a collection.

**Origin**
Late Middle English: via Old French from medieval Latin sortilegium 'sorcery', from Latin sortilegus 'sorcerer', from Latin sors, sort- 'lot, chance' + legere 'choose'.


**ledger** /ˈlɛdʒə/

1. A book or other collection of financial accounts.

...

**Origin**
Late Middle English legger, ligger (denoting a large bible or breviary), probably from variants of lay and lie, influenced by Dutch legger and ligger. Current senses date from the 16th century...

-Oxford English

Thus

**sortiledger** /'sɔrdlɛdʒə/

**NOUN**

_neologism_ A tool for recording random assignments.

## Problem Addressed

Suppose a scarce resource exists and it must be distributed amongst a group of people, but no more than once. That would be relatively easy to do, right? You just pluck names out of the hat, and now your randomization system also removes people.

However, suppose that you want to be able to easily assign a second resource, but only after you have sifted through the entire first resource. Suppose there are multiple scarce resources which must be assigned exclusively. Suppose preferences matter. Suppose you need to be able to track the history of these assignments so that you can set off a cascade update when a name is withdrawn, for reasons outside your system.

You need a tool for that. Preferably one that can be easily integrated with your existing SQL databases without much problem. You... ARE running SQL databases, right?

You need a sortiledger.

## Technology

`sortiledger` is a function that is intended to integrate with a Node Express server. A compatible client with an appropriate form _must_ be used in order to accumulate data for `sortiledger`'s operation at some point, however, and this must have a database to interact with, so the project is built alongside a React client and an SQLite database for testing and demonstration purposes. The full mechanics of `sortiledger` will be extracted for general use into a mostly painless and fully portable package upon sufficient testing.

Out of curiosity about what monorepos are about, Lerna was used to build and manage this project. It was deemed especially appropriate because this is inherently a solo-flight project that mostly swirls around building an integrated process, forging a function in the very center of that process, and then extracting it.
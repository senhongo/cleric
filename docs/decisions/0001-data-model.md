# Data Model

Date: 2023-05-30

Status: accepted

## Context

The shape of the model has changed multiple times. Initially, a normalised model was planned with a separate table for `weight`, `diet` and `activity`..

We later denormalised everything into a single `Records` collection because it's just easier that way when using Firebase.

## Decision

It's not ideal but doing so allows us to fire off a single query instead of 3 queries for each table.

## Consequences

Out data model is tied to the way Firebase handles queries, with FB specific data types. One way to mitigate this is to use [DTO]s for formatting data between the API caller and consumer.

[DTO]: https://en.wikipedia.org/wiki/Data_transfer_object

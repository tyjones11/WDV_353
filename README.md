# 3.1 MongoDB Query Operations

Comparison Query Operatiors
```
$gt (Greater Than): operator is used to filter documents where the value of a field is greater than a specified value.

$lt (Less Than): operator is used to filter documents where the value of a field is less than a specified value.

$gte (Greater Than or Equal To): Matches values greater than or equal to a specified value.

$lte (Less Than or Equal To): Matches values less than or equal to a specified value.

$ne (Not Equal To): Matches values that are not equal to a specified value.

$in (In): Matches any of the values specified in an array.

$nin (Not In): Matches values that are not in the specified array.
```

# 3.2 Mongoose Select & Sort

Select Method allows you to define the fields you want to include or exclude
in the query result. It takes a string or an object as an arguement.

```
Optimizing Queries: Reducing the data retrieved can improve query performance, especially when dealing with large documents.

Privacy Concerns: When dealing with sensitive information, you may want to exclude certain fields for privacy reasons.

Reducing Payload: In scenarios where you're building APIs and want to reduce the amount of data sent to the client, you can selectively choose fields to include.
```


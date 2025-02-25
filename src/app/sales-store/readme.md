# effects

effect take one event and do some side effect and return another event
it does not know anything related to store or view

# reducer

reducer take one event, make some update to the store, it does not know

# view

view does two thing

1. use selector to subscribe the change of store
2. dispatch events

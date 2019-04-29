library(jsonlite)
dummyData <- data.frame()

dummyData <- sapply(1:100000, function(x){
    row <- sample(1:100,4,replace=F)
    row <- t(as.data.frame(row, stringsAsFactors = FALSE))
    rbind(dummyData, row)
})
dummyData <- as.data.frame(t(dummyData))
names(dummyData) <- c("d1", "d2", "d3", "d4")
exportJson <- toJSON(dummyData, pretty=TRUE)
write(exportJson, "dummyData.json")

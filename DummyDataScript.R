library(jsonlite)
dummyData <- data.frame()
dummyData <- data.frame(d1 = as.integer(), d2 = as.integer(), 
                        d3 = as.integer(), d4 = as.integer(), 
                        stringsAsFactors = FALSE)

  for (j in 1:1000){
    for(k in 1:4){
      row <- sample(1:100,4,replace=F)
      row <- rbind(row, row)
      row <- as.data.frame(row, stringsAsFactors = FALSE)
      dummyData <- rbind(dummyData, row[1,])
    }
  }

names(dummyData) <- c("d1", "d2", "d3", "d4")
exportJson <- toJSON(dummyData, pretty=TRUE)
write(exportJson, "dummyData.json")
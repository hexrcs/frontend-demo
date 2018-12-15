# Design Files of the Frontend

On Windows, the design file can be opened/edited with an awesome free app [Lunacy](https://icons8.com/lunacy).

## Notes

### Diagram Options

#### Generic

```
xAxis: enum JSON attributes
yAxis: enum JSON attributes
enableLegends: boolean
enableTooltip: boolean
enableAnimation: boolean
source: enum Source names
```

#### Timeline Plot

```
lineWidth: number px
lineOpacity: 0 <= number <= 1
enablePoints: boolean
enableShapedPoints: boolean
pointSize: number px
pointOpacity: 0 <= number <= 1
enableArea: boolean
areaOpacity: 0 <= number <= 1
```

#### Scatter Plot

```
enableShapedPoints: boolean
pointSize: number px
pointOpacity: 0 <= number <= 1
```

#### Network Diagram

*TBD but...*

```
lineWidth: number px
lineOpacity: 0 <= number <= 1
enableShapedPoints: boolean
pointSize: number px
pointOpacity: 0 <= number <= 1
```

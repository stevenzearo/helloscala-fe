ThisBuild / assemblyMergeStrategy := {
  //  case PathList("javax", "servlet", xs @ _*)         => MergeStrategy.first
    case PathList(ps @ _*) if ps.last endsWith ".class" => MergeStrategy.first
    case PathList(ps @ _*) if ps.last endsWith ".conf" => MergeStrategy.concat
//  case "application.conf"                            => MergeStrategy.concat
  //  case "unwanted.txt"                                => MergeStrategy.discard
    case x =>
      val oldStrategy = (ThisBuild / assemblyMergeStrategy).value
      oldStrategy(x)
}

lazy val helloScalaSite = (project in file("hello-scala-site"))
  .enablePlugins(PlayScala)
  .enablePlugins(SbtTwirl)
  //.enablePlugins(PlayNettyServer).disablePlugins(PlayPekkoHttpServer) // uncomment to use the Netty backend
  .settings(
    name := """hello-scala-site""",
    organization := "com.helloscala",
    version := "0.0.1-SNAPSHOT",
    crossScalaVersions := Seq("2.13.12", "3.3.1"),
    scalaVersion := crossScalaVersions.value.head,
    libraryDependencies ++= Seq(
      guice,
      "org.scalatestplus.play" %% "scalatestplus-play" % "7.0.1" % Test
    ),
    scalacOptions ++= Seq(
      "-feature",
      "-Werror"
    )
  )

lazy val boHelloScalaSite = (project in file("bo-hello-scala-site"))
  .enablePlugins(PlayScala)
  .enablePlugins(SbtTwirl)
  //.enablePlugins(PlayNettyServer).disablePlugins(PlayPekkoHttpServer) // uncomment to use the Netty backend
  .settings(
    name := """hello-scala-site""",
    organization := "com.helloscala",
    version := "0.0.1-SNAPSHOT",
    crossScalaVersions := Seq("2.13.12", "3.3.1"),
    scalaVersion := crossScalaVersions.value.head,
    libraryDependencies ++= Seq(
      guice,
      "org.scalatestplus.play" %% "scalatestplus-play" % "7.0.1" % Test
    ),
    scalacOptions ++= Seq(
      "-feature",
      "-Werror"
    )
  )
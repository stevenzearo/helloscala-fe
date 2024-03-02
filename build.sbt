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
            "org.playframework" %% "play" % "3.0.1"
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
            "org.playframework" %% "play" % "3.0.1"
        ),
        scalacOptions ++= Seq(
            "-feature",
            "-Werror"
        )
    )
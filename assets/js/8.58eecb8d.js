(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{179:function(t,e,a){"use strict";a.r(e);var s=a(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v('DBacked is the "database backup script" killer. It backups your PostgreSQL / MySQL / MongoDB database, encrypt it and stream it on S3. Unlike basic scripts, it also includes the restore process to get data back from your backups in 30 seconds.')]),t._v(" "),a("p",[t._v("DBacked is free but also includes a pro version that handle S3 for you, alerts you when the backups are 30 minutes late and works in a distributed environment. For more information, look at the "),a("a",{attrs:{href:"https://dbacked.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DBacked SaaS website"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("The compiled version is hosted here: "),a("a",{attrs:{href:"https://dl.dbacked.com/dbacked",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dl.dbacked.com/dbacked"),a("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("Amazon RDS provides an automated backup system but it's limited to a retention of 35 days and a frequency of one per day. The automated backups will be deleted when the database is deleted (which someone can do by accident). Also, the backups are encrypted with a key you don't own. If you want to only use the backups provided by RDS, you should create a script that will manualy backup your RDS instance and transfer the ownership of these backups to another AWS account that will only be used for this usage. This will protect you from an attacker getting access to your AWS account.")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("A lot of things can go wrong with a simple script in your crontab like not having enough space available on your server to store the backup or changing the credentials in your database and forgeting to update them in your script. It's also easy to forget to setup the cron while migrating on a new server.")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("Most database systems, including PostgreSQL, MySQL and MongoDB recommends that you stop the database before making a copy of the database files. The reason is that the files can be modified by a database write while you are copying them, resulting in a corrupted backup. You should use a program like pg_dump, mysqldump or mongodump or a frozen snapshot of your filesystem if it supports it.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"what-s-inside"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-s-inside","aria-hidden":"true"}},[this._v("#")]),this._v(" What's inside?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("DBacked uses "),e("code",[this._v("pg_dump")]),this._v(", "),e("code",[this._v("mysqldump")]),this._v(" or "),e("code",[this._v("mongodump")]),this._v(" and includes:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Simple install process")]),t._v(" "),a("li",[t._v("Interactive configuration")]),t._v(" "),a("li",[t._v("No crontab editing")]),t._v(" "),a("li",[t._v("Automatic SystemD service creation (Ubuntu and other)")]),t._v(" "),a("li",[t._v("Encryption with a public/private key pair")]),t._v(" "),a("li",[t._v("Streaming upload to your own AWS S3 bucket")]),t._v(" "),a("li",[t._v("Backup restore process")]),t._v(" "),a("li",[t._v("Docker compatibility")]),t._v(" "),a("li",[t._v("Email alerts when last backup is older than 30 days")]),t._v(" "),a("li",[t._v("Works with big databases (150+GB) without temp files")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Once installed, it checks every 5 minutes if a backup is needed, downloads the last version of "),e("code",[this._v("pg_dump")]),this._v(", "),e("code",[this._v("mysqldump")]),this._v(" or "),e("code",[this._v("mongodump")]),this._v(", starts it, encrypts the output and streams it to Amazon S3 while monitoring the backup process.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When you want to restore a backup, DBacked will get the list of available backups from your AWS S3 bucket, let you select the one you want from an interactive list, decrypt it and stream it to "),e("code",[this._v("pg_restore")]),this._v(", "),e("code",[this._v("mysqlrestore")]),this._v(" or "),e("code",[this._v("mongorestore")]),this._v(". It's the fastest way to get your data back.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"why-not-x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-not-x","aria-hidden":"true"}},[this._v("#")]),this._v(" Why not X?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"amazon-web-services-rds-backups"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amazon-web-services-rds-backups","aria-hidden":"true"}},[this._v("#")]),this._v(" Amazon Web Services RDS backups")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"basic-script-in-a-crontab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-script-in-a-crontab","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic script in a crontab")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"database-files-copy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-files-copy","aria-hidden":"true"}},[this._v("#")]),this._v(" Database files copy")])}],!1,null,null,null);i.options.__file="index.md";e.default=i.exports}}]);